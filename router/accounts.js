const express = require('express');
const router = express.Router();
const accountTransactions = require("../Database/query/accountTransactions");
const customerTransactions = require("../Database/query/customerTransactions");


//tokeni verilen kullanıcının hesapları listelendi
router.post('/', async (req, res) => {
  const account = await accountTransactions.accounts(req.body)
  if (account.recordset[0].Status != 0) {
      res.json(account.recordsets[0]); // Kişinin bilgilerini çek listele  
  } else {
    res.json({ status: 404, message: "Not found account!" });    
  }
})

//---------------Hesap açma--------------

//yeni hesap açarken
router.post('/newAccount', async (req, res) => {
  const newAccount = await accountTransactions.addAccount(req.body)
  if (newAccount.recordset[0].Status != 0) {
    res.json(newAccount);  
  } else {
    res.json({ status: 500, message: "Open not account!" })    
  }
})

//-------------Para Yatırma--------------

//seçilen hesaba para yükleme 3 parametreli
router.post('/deposit', async (req, res) => {
  const deposit = await accountTransactions.depositAccount(req.body)
  if (deposit.recordset[0].Status != 0) {
    res.json(deposit);
  } else {
    res.json({ status: 500, message: "Not transaction deposit!" });       
  }
})

//--------------Para Çekme-----------------
//seçilen hesaptan girilen miktar kadar para çekilecek
router.post('/withdraw', async (req, res) => {
  const withdraw = await accountTransactions.depositAccount(req.body)
  if (withdraw.recordset[0].Status != 0) {
    res.json(withdraw);  
  } else {
    res.json({ status: 500, message: "Open not transaction withdraw!" });
  }
})

//----------Hesap silme----------------
router.post('/deleteAccount', async (req, res) => {
  const deleteAcc = await accountTransactions.deleteAccount(req.body)
  if (deleteAcc.recordset[0].Status != 0) {
    res.json(deleteAcc);  
  } else {
    res.json({ status: 500, message: "-Balance- transaction Delete Account!" });
  }
})

//----------Virman -----------------
router.post('/virman', async (req, res) => {
  const virmanAccount = await accountTransactions.virman(req.body)
  if (virmanAccount.recordset[0].Status != 0) {
    res.json(virmanAccount);  
  } else {
    res.json({ status: 500, message: "Not transaction Virman!" });
  }
})

//----------EFT--------------------
router.post('/eft', async (req, res) => {
  const eftAccount = await accountTransactions.eft(req.body)
  if (eftAccount.recordset[0].Status != 0) {
    res.json(eftAccount);
  } else {
    res.json({ status: 500, message: "Not transaction Virman!" });
  }
})


module.exports = router;