const express = require('express');
const router = express.Router();
const accountTransactions = require("../Database/query/accountTransactions");


router.post('/', async (req, res) => {
  const account = await accountTransactions.accounts(req.body)
  if (account.recordset[0].Status != 0) {
      res.json(account.recordsets[0]);  
  } else {
    res.json({ status: 404, message: "Not found account!" });    
  }
})


router.post('/newAccount', async (req, res) => {
  const newAccount = await accountTransactions.addAccount(req.body)
  if (newAccount.recordset[0].Status != 0) {
    res.json(newAccount);  
  } else {
    res.json({ status: 500, message: "Open not account!" })    
  }
})


router.post('/deposit', async (req, res) => {
  const deposit = await accountTransactions.depositAccount(req.body)
  if (deposit.recordset[0].Status != 0) {
    res.json(deposit);
  } else {
    res.json({ status: 500, message: "Not transaction deposit!" });       
  }
})


router.post('/withdraw', async (req, res) => {
  const withdraw = await accountTransactions.withdrawAccount(req.body)
  if (withdraw.recordset[0].Status != 0) {
    res.json(withdraw);  
  } else {
    res.json({ status: 500, message: "Open not transaction withdraw!" });
  }
})


router.post('/deleteAccount', async (req, res) => {
  const deleteAcc = await accountTransactions.deleteAccount(req.body)
  if (deleteAcc.recordset[0].Status != 0) {
    res.json(deleteAcc);  
  } else {
    res.json({ status: 500, message: "-Balance- transaction Delete Account!" });
  }
})


router.post('/virman', async (req, res) => {
  const virmanAccount = await accountTransactions.virman(req.body)
  if (virmanAccount.recordset[0].Status != 0) {
    res.json(virmanAccount);  
  } else {
    res.json({ status: 500, message: "Not transaction Virman!" });
  }
})

router.post('/eft', async (req, res) => {
  const eftAccount = await accountTransactions.eft(req.body)
  if (eftAccount.recordset[0].Status != 0) {
    res.json(eftAccount);
  } else {
    res.json({ status: 500, message: "Not transaction EFT!" });
  }
})

router.post('/accTransactions', async(req,res) => {
  const accTransactions = await accountTransactions.accTransactions(req.body)
  if (accTransactions.recordset[0].Status != 0) {
    res.json(accTransactions);
  } else {
    res.json({ status: 500, message: "Account transaction not found !!" })
  }
})

router.post('/listofmoneytransfers', async(req, res) => {
  const listofMoneyTransfers = await accountTransactions.listofMoneyTransfers(req.body)
  if (listofMoneyTransfers.recordset[0].Status != 0) {
    res.json(listofMoneyTransfers);
  } else {
    res.json({ status: 404, message: "Transfers not found !" })
  }
})

router.post('/popupmoneytransfer', async(req, res) => {
  const popUpMoneyTransfer = await accountTransactions.popupMoneyTransfer(req.body)
  if (popUpMoneyTransfer.recordset[0].Status != 0) {
    res.json(popUpMoneyTransfer.recordsets[0]);
  } else {
    res.json({ status: 500, message: "Transfer not found !" })
  }
})


module.exports = router;