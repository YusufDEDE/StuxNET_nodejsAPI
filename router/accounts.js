const express = require('express');
const router = express.Router();
const accountTransactions = require("../Database/query/accountTransactions");
const customerTransactions = require("../Database/query/customerTransactions");


//tokeni verilen kullanıcının hesapları listelendi
router.post('/', async (req, res) => {
  const account = await accountTransactions.accounts(req.body)
  res.json(account.recordsets[0]); // Kişinin bilgilerini çek listele
})

//---------------Hesap açma--------------

//yeni hesap açarken
router.post('/newAccount', async (req, res) => {
  const newAccount = await accountTransactions.addAccount(req.body)
  res.json(newAccount);
})

//-------------Para Yatırma--------------

//seçilen hesaba para yükleme 3 parametreli
router.post('/deposit', async (req, res) => {
  const newAccount = await accountTransactions.depositAccount(req.body)
  res.json(newAccount);
})

//--------------Para Çekme-----------------

//seçilen hesaptan girilen miktar kadar para çekilecek
router.post('/withdraw', async (req, res) => {
  const newAccount = await accountTransactions.depositAccount(req.body)
  res.json(newAccount);
  /*if (account.recordsets[0][0].Quantity >= req.body.Quantity) {
    const quantity = await accountTransactions.withdraw(user.CustomerID, req.body.ekNo, req.body.Quantity)
    res.json(quantity);
  } else {
    res.json({ status: 500, message: "insufficient balance!!" })
  }*/
})

//----------Hesap silme----------------

router.post('/deleteAccount', async (req, res) => {
  const newAccount = await accountTransactions.deleteAccount(req.body)
  res.json(newAccount);
})

//----------Virman -----------------
router.post('/virman', async (req, res) => {
  const virmanAccount = await accountTransactions.virman(req.body)
  res.json(virmanAccount);
})

//----------EFT--------------------
router.post('/eft', async (req, res) => {
  const eftAccount = await accountTransactions.eft(req.body)
  res.json(eftAccount);
})


module.exports = router;