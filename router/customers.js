const express = require('express');
const router = express.Router();
const customerTransactions = require("../Database/query/customerTransactions");


router.post('/updateUser', async (req, res) => {
    console.log("UpdateUser'a ulaşıldı.")
    const response = await customerTransactions.UpdateUser(req.body)
    res.json(response);
  })
  
  router.post('/updateUserList', async (req, res) => {
      const user = await customerTransactions.findByTC(req.body)
      res.json(user.recordsets[0]);
  });

  module.exports = router;