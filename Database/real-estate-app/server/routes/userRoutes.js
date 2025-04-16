const express = require('express');
const { addUser, loginUser, getAllUsers, editUser, deleteUser, getAllDealers } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/dealers', getAllDealers);
router.post('/register', addUser);
router.post('/login', loginUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
