const express = require('express');
const router = express.Router();
const paymentTransactions = require('../Database/query/paymentTransactions');

router.post('/',async (req,res) => {
    const payment = await paymentTransactions.payment(req.body);
    if (payment.recordset[0] != 0) {
        res.json(payment)
    } else {
        res.json({ status:500, message: "Payment Failed !!"})
    }
})

module.exports = router;