const express = require("express");
const router = express.Router();
const {
    getTaxTotal
} = require('../controllers/totals');

router.get('/tax', getTaxTotal)


module.exports = router;
