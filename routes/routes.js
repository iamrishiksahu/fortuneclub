const express = require('express')
const router = express.Router()

router.route('/', (req, res) => {
    res.status(200).json({'message': 'finding here!'})
})

module.exports = router