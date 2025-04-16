const { poolPromise, sql } = require('../db');

// Create Listing
const addListing = async (req, res) => {
  try {
    const {
      propertyName,
      description,
      listingType,
      salePrice,
      rentAmount,
      leaseAmount,
      leaseDuration,
      propertyType,
      address,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      area,
      contactNumber,
      dealerId,
    } = req.body;

    const pool = await poolPromise;

    await pool.request()
      .input('propertyName', sql.NVarChar, propertyName)
      .input('description', sql.NVarChar, description)
      .input('listingType', sql.NVarChar, listingType)
      .input('salePrice', sql.Float, listingType === 'SALE' ? salePrice : null)
      .input('rentAmount', sql.Float, listingType === 'RENT' ? rentAmount : null)
      .input('leaseAmount', sql.Float, listingType === 'LEASE' ? leaseAmount : null)
      .input('leaseDuration', sql.NVarChar, listingType === 'LEASE' ? leaseDuration : null)
      .input('propertyType', sql.NVarChar, propertyType)
      .input('address', sql.NVarChar, address)
      .input('city', sql.NVarChar, city)
      .input('state', sql.NVarChar, state)
      .input('postalCode', sql.NVarChar, postalCode)
      .input('bedrooms', sql.Int, bedrooms)
      .input('bathrooms', sql.Int, bathrooms)
      .input('area', sql.Float, area)
      .input('contactNumber', sql.NVarChar, contactNumber)
      .input('dealerId', sql.NVarChar, dealerId)
      .query(`
        INSERT INTO [Listing] (
          propertyName, description, listingType, salePrice, rentAmount, leaseAmount, leaseDuration,
          propertyType, address, city, state, postalCode, bedrooms, bathrooms, area, contactNumber,
          dealerId, createdAt, updatedAt
        )
        VALUES (
          @propertyName, @description, @listingType, @salePrice, @rentAmount, @leaseAmount, @leaseDuration,
          @propertyType, @address, @city, @state, @postalCode, @bedrooms, @bathrooms, @area, @contactNumber,
          @dealerId, GETDATE(), GETDATE()
        )
      `);

    res.status(201).send({ message: 'Listing created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while creating the listing.' });
  }
};

// Get All Listings
const getAllListings = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM [Listing]');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching listings.' });
  }
};

// Update Listing
const editListing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      propertyName,
      description,
      listingType,
      salePrice,
      rentAmount,
      leaseAmount,
      leaseDuration,
      propertyType,
      address,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      area,
      contactNumber,
    } = req.body;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('id', sql.NVarChar, id)
      .input('propertyName', sql.NVarChar, propertyName)
      .input('description', sql.NVarChar, description)
      .input('listingType', sql.NVarChar, listingType)
      .input('salePrice', sql.Float, listingType === 'SALE' ? salePrice : null)
      .input('rentAmount', sql.Float, listingType === 'RENT' ? rentAmount : null)
      .input('leaseAmount', sql.Float, listingType === 'LEASE' ? leaseAmount : null)
      .input('leaseDuration', sql.NVarChar, listingType === 'LEASE' ? leaseDuration : null)
      .input('propertyType', sql.NVarChar, propertyType)
      .input('address', sql.NVarChar, address)
      .input('city', sql.NVarChar, city)
      .input('state', sql.NVarChar, state)
      .input('postalCode', sql.NVarChar, postalCode)
      .input('bedrooms', sql.Int, bedrooms)
      .input('bathrooms', sql.Int, bathrooms)
      .input('area', sql.Float, area)
      .input('contactNumber', sql.NVarChar, contactNumber)
      .query(`
        UPDATE [Listing]
        SET propertyName = @propertyName,
            description = @description,
            listingType = @listingType,
            salePrice = @salePrice,
            rentAmount = @rentAmount,
            leaseAmount = @leaseAmount,
            leaseDuration = @leaseDuration,
            propertyType = @propertyType,
            address = @address,
            city = @city,
            state = @state,
            postalCode = @postalCode,
            bedrooms = @bedrooms,
            bathrooms = @bathrooms,
            area = @area,
            contactNumber = @contactNumber,
            updatedAt = GETDATE()
        WHERE id = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send({ error: 'Listing not found.' });
    }

    res.status(200).send({ message: 'Listing updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while updating the listing.' });
  }
};

// Delete Listing
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await poolPromise;

    const result = await pool.request()
      .input('id', sql.NVarChar, id)
      .query('DELETE FROM [Listing] WHERE id = @id');

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send({ error: 'Listing not found.' });
    }

    res.status(200).send({ message: 'Listing deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while deleting the listing.' });
  }
};

const addInterest = async (req, res) => {
  try {
    const { listingId, clientId } = req.body;

    if (!listingId || !clientId) {
      return res.status(400).send({ error: 'Listing ID and Client ID are required.' });
    }

    const pool = await poolPromise;

    await pool.request()
      .input('listingId', sql.UniqueIdentifier, listingId)
      .input('clientId', sql.UniqueIdentifier, clientId)
      .query(`
        INSERT INTO [InterestedClients] (listingId, clientId)
        VALUES (@listingId, @clientId)
      `);

    res.status(201).send({ message: 'Interest recorded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while recording interest.' });
  }
};

// Get Listings by Dealer ID
const getListingsByDealer = async (req, res) => {
  try {
    const { dealerId } = req.params;
    const pool = await poolPromise;
    const result = await pool.request()
      .input('dealerId', sql.UniqueIdentifier, dealerId)
      .query('SELECT * FROM [Listing] WHERE dealerId = @dealerId');

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching listings for the dealer.' });
  }
};

// Get Interested Clients by Property ID
const getInterestedClients = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const pool = await poolPromise;
    const result = await pool.request()
      .input('propertyId', sql.UniqueIdentifier, propertyId)
      .query(`
        SELECT c.id, c.firstName, c.lastName, c.email
        FROM [InterestedClients] ic
        JOIN [User] c ON ic.clientId = c.id
        WHERE ic.listingId = @propertyId
      `);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching interested clients.' });
  }
};

module.exports = { addListing, getAllListings, editListing, deleteListing, addInterest, getListingsByDealer, getInterestedClients };
