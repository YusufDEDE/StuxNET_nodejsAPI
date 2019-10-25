const express = require('express');
const router = express.Router();
const customerTransactions = require("../Database/query/customerTransactions");


//Güncellenecek kişi bilgileri güncelle
router.post('/updateUser', async (req, res) => {
    console.log("UpdateUser'a ulaşıldı.")
    const response = await customerTransactions.UpdateUser(req.body)
    res.json(response);
  })
  
  //Güncellenecek kişi bilgileri listele
  router.post('/updateUserList', async (req, res) => {
      const user = await customerTransactions.findByTC(req.body)
      res.json(user.recordsets[0]); // Kişinin bilgilerini çek listele
  });

  module.exports = router;