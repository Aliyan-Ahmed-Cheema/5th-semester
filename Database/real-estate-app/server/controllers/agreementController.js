const { poolPromise, sql } = require('../db');

// Create Agreement
const createAgreement = async (req, res) => {
  try {
    const {
      dealerId,
      clientId,
      propertyId,
      agreementType,
      price,
      rentAmount,
      leaseAmount,
      leaseDuration,
    } = req.body;

    const pool = await poolPromise;

    await pool.request()
      .input('dealerId', sql.UniqueIdentifier, dealerId)
      .input('clientId', sql.UniqueIdentifier, clientId)
      .input('propertyId', sql.UniqueIdentifier, propertyId)
      .input('agreementType', sql.NVarChar, agreementType)
      .input('price', sql.Float, agreementType === 'SALE' ? price : null)
      .input('rentAmount', sql.Float, agreementType === 'RENT' ? rentAmount : null)
      .input('leaseAmount', sql.Float, agreementType === 'LEASE' ? leaseAmount : null)
      .input('leaseDuration', sql.NVarChar, agreementType === 'LEASE' ? leaseDuration : null)
      .query(`
        INSERT INTO [Agreement] (
          dealerId, clientId, propertyId, agreementType, price, rentAmount, leaseAmount, leaseDuration, createdAt, updatedAt
        )
        VALUES (
          @dealerId, @clientId, @propertyId, @agreementType, @price, @rentAmount, @leaseAmount, @leaseDuration, GETDATE(), GETDATE()
        )
      `);

    res.status(201).send({ message: 'Agreement created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while creating the agreement.' });
  }
};

// Get All Agreements
const getAllAgreements = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT 
        a.id,
        d.firstName + ' ' + d.lastName AS dealerName,
        c.firstName + ' ' + c.lastName AS clientName,
        l.propertyName,
        a.agreementType,
        a.price,
        a.rentAmount,
        a.leaseAmount,
        a.leaseDuration,
        a.createdAt
      FROM [Agreement] a
      JOIN [User] d ON a.dealerId = d.id
      JOIN [User] c ON a.clientId = c.id
      JOIN [Listing] l ON a.propertyId = l.id
    `);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching agreements.' });
  }
};

const editAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      agreementType,
      price,
      rentAmount,
      leaseAmount,
      leaseDuration,
    } = req.body;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('id', sql.UniqueIdentifier, id)
      .input('agreementType', sql.NVarChar, agreementType)
      .input('price', sql.Float, agreementType === 'SALE' ? price : null)
      .input('rentAmount', sql.Float, agreementType === 'RENT' ? rentAmount : null)
      .input('leaseAmount', sql.Float, agreementType === 'LEASE' ? leaseAmount : null)
      .input('leaseDuration', sql.NVarChar, agreementType === 'LEASE' ? leaseDuration : null)
      .query(`
        UPDATE [Agreement]
        SET agreementType = @agreementType,
            price = @price,
            rentAmount = @rentAmount,
            leaseAmount = @leaseAmount,
            leaseDuration = @leaseDuration,
            updatedAt = GETDATE()
        WHERE id = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send({ error: 'Agreement not found.' });
    }

    res.status(200).send({ message: 'Agreement updated successfully.' });
  } catch (error) {
    console.error('Error updating agreement:', error);
    res.status(500).send({ error: 'An error occurred while updating the agreement.' });
  }
};

// Delete Agreement
const deleteAgreement = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.UniqueIdentifier, id)
      .query('DELETE FROM [Agreement] WHERE id = @id');

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send({ error: 'Agreement not found.' });
    }

    res.status(200).send({ message: 'Agreement deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while deleting the agreement.' });
  }
};

module.exports = { createAgreement, getAllAgreements, editAgreement, deleteAgreement };
