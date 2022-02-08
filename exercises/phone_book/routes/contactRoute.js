const express = require('express')
const { getAllContact,getContact, addContact, deleteContact } = require('../controllers/contactController')
const router = express.Router()

router.get('/', getAllContact )
router.post('/', addContact )
router.get('/:id', getContact )
router.delete('/:id', deleteContact )


module.exports = router