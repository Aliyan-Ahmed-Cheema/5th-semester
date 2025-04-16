const express = require('express');
const sql = require('mssql'); // SQL Server client library for Node.js
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// SQL Server Configuration
const dbConfig = {
    user: 'yourUsername',
    password: 'yourPassword',
    server: 'localhost',
    database: 'project',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// Endpoint to fetch properties by TenantID
app.get('/properties/:tenantID', async (req, res) => {
    const { tenantID } = req.params;

    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request()
            .input('tenantID', sql.Int, tenantID)
            .execute('GetPropertyByTenantID1');

        res.json(result.recordset);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
