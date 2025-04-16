const express = require('express');
const { createAgreement, getAllAgreements, editAgreement, deleteAgreement } = require('../controllers/agreementController');

const router = express.Router();

router.post('/', createAgreement);
router.get('/', getAllAgreements);
router.put('/:id', editAgreement);
router.delete('/:id', deleteAgreement);

module.exports = router;
