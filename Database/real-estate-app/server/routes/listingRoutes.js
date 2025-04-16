const express = require('express');
const { addListing, getAllListings, editListing, deleteListing, addInterest, getInterestedClients, getListingsByDealer } = require('../controllers/listingController');

const router = express.Router();

router.get('/', getAllListings);
router.get('/dealer/:dealerId', getListingsByDealer);
router.get('/:propertyId/interested-clients', getInterestedClients);
router.post('/', addListing);
router.put('/:id', editListing);
router.delete('/:id', deleteListing);
router.post('/interest', addInterest);

module.exports = router;
