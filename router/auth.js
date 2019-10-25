const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const customerTransactions = require("../Database/query/customerTransactions");


//kayıt olma sırasında çalışır
router.post('/register', async (req, res, next) => {
    console.log("register'a ulaşıldı.")
    const response = await customerTransactions.RegisterUser(req.body)
    res.json(response);
});


router.post('/login', async (req, res) => {
    const response = await customerTransactions.LoginUser(req.body)
    if (response) {
        const payload = { tcNumber: response.tcNumber };
        const token = jwt.sign(payload, req.app.get('api_key'), { expiresIn: 720 });//12 saat aktif token
        res.json({
            status: true,
            token
        });
        console.log(token);
    }
    else {
        res.json({
            status: false,
            message: 'Authenticated failed, user not found'
        })
    }
});

module.exports = router;