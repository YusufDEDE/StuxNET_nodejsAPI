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

router.post('/listofpaymenttransactions', async (req,res) => {
    const paymentTransaction = await paymentTransactions.listofPaymentTransactions(req.body);
    if (paymentTransaction.recordset[0] != 0) {
        res.json(paymentTransaction.recordsets[0])
    } else {
        res.json({ status:404, message: "Payment Transactions Not Found !!"})        
    }
})

router.post('/popuppaymenttransaction', async (req,res) => {
    const popUpMoneyTransaction = await paymentTransactions.popupPaymentTransactions(req.body);
    if (popUpMoneyTransaction != 0) {
        res.json(popUpMoneyTransaction.recordsets[0])
    } else {
        res.json({ status:404, message: "Payment Transaction Information Not Found !!"})     
    }
})

module.exports = router;