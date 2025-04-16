const { poolPromise, sql } = require('../db');

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

module.exports = { getAllDealers };
