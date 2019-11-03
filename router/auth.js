const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const customerTransactions = require("../Database/query/customerTransactions");


//kayıt olma sırasında çalışır
router.post('/register', async (req, res) => {
    const response = await customerTransactions.RegisterUser(req.body);
    if (response.recordset[0].Status != 0) {
        res.json(response);
    }
    else {
        res.json({ status: 500, message: "Not working transaction Register!" });
    }
})


router.post('/login', async (req, res) => {
    const response = await customerTransactions.LoginUser(req.body)
    if (response.recordset[0].Status != 0) {
        const payload = { tc: response.tc };
        const token = jwt.sign(payload, req.app.get('api_key'), { expiresIn: 720 });//12 saat aktif token
        res.json({
            status: true,
            token
        });
    }
    else {
        res.json({
             status: 500, 
             message: "tc or password wrong not login!" 
        });
    }
})

module.exports = router;