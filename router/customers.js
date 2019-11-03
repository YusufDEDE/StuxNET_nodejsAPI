const express = require('express');
const router = express.Router();
const customerTransactions = require("../Database/query/customerTransactions");


router.post('/updateUser', async (req, res) => {
    const response = await customerTransactions.UpdateUser(req.body)
    if (response.recordset[0].Status != 0) {
        res.json(response);    
    } else {
        res.json({ status: 500, message: "Not transaction update user!" });
    }
  })
  
router.post('/updateUserList', async (req, res) => {
    const user = await customerTransactions.findByTC(req.body)
    if(user.recordset[0].Status != 0){
        res.json(user.recordsets[0]); 
    }
    else{
        res.json({ status: 404, message: "Not found customer!" });
    }
});

module.exports = router;