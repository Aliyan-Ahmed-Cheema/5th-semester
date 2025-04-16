const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { poolPromise, sql } = require('../db');

const JWT_SECRET = 'YzRmNTcwMDUtZjU1NC00YzZkLWJkZTAtYjQ1ODk2MTE5MjZh';

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .query('SELECT COUNT(*) AS count FROM [User] WHERE email = @email');

    if (result.recordset[0].count > 0) {
      return res.status(400).send({ error: 'Email already exists. Please use a different email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.request()
      .input('firstName', sql.NVarChar, firstName)
      .input('lastName', sql.NVarChar, lastName)
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, hashedPassword)
      .input('role', sql.NVarChar, role)
      .query(`
        INSERT INTO [User] (firstName, lastName, email, password, role, createdAt, updatedAt)
        VALUES (@firstName, @lastName, @email, @password, @role, GETDATE(), GETDATE())
      `);

    res.status(201).send({ message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while adding the user.' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .input('role', sql.NVarChar, role)
      .query(`SELECT * FROM [User] WHERE email = @email AND role = @role`);

    if (result.recordset.length === 0) {
      return res.status(401).send({ error: 'Invalid email, password, or role' });
    }

    const user = result.recordset[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while logging in.' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM [User]');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching users.' });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role } = req.body;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('id', sql.NVarChar, id)
      .input('firstName', sql.NVarChar, firstName)
      .input('lastName', sql.NVarChar, lastName)
      .input('email', sql.NVarChar, email)
      .input('role', sql.NVarChar, role)
      .query(`
        UPDATE [User]
        SET firstName = @firstName,
            lastName = @lastName,
            email = @email,
            role = @role,
            updatedAt = GETDATE()
        WHERE id = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send({ error: 'User not found.' });
    }

    res.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while updating the user.' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await poolPromise;

    await pool.request()
      .input('id', sql.NVarChar, id)
      .query('DELETE FROM [User] WHERE id = @id');

    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while deleting the user.' });
  }
};

// Get All Dealers
const getAllDealers = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT id, firstName, lastName, email FROM [User] WHERE role = \'DEALER\'');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching dealers.' });
  }
};

module.exports = { addUser, loginUser, getAllUsers, editUser, deleteUser, getAllDealers};
