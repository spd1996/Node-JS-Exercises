// routes/banking.js
import express from 'express';
import bank from './bank.js';

const router = express.Router();

// Route to create an account
router.post('/create', (req, res) => {
  const { accountNumber, initialBalance } = req.body;
  const message = bank.createAccount(accountNumber, initialBalance);
  if(!accountNumber){
    res.status(400).json({ message: 'Account No Undefined' })
  }
  if(!initialBalance){
    res.status(400).json({ message: 'Initial balance Undefined' })
  } else {  
      res.send(message);
  }
});

// Route to deposit money
router.post('/deposit', (req, res) => {
  const { accountNumber, amount } = req.body;
  const message = bank.deposit(accountNumber, amount);
  if(!accountNumber){
    res.status(400).json({ message: 'Account No Undefined' })
  }
  if(!amount){
    res.status(400).json({ message: 'Amount balance Undefined' })
  } else {  
      res.send(message);
  }
});

// Route to withdraw money
router.post('/withdraw', (req, res) => {
  const { accountNumber, amount } = req.body;
  const message = bank.withdraw(accountNumber, amount);
  if(!accountNumber){
    res.status(400).json({ message: 'Account No Undefined' })
  }
  if(!amount){
    res.status(400).json({ message: 'Amount balance Undefined' })
  } else {  
      res.send(message);
  }
});

// Route to transfer money
router.post('/transfer', (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;
  const message = bank.transfer(fromAccount, toAccount, amount);
  if(!fromAccount){
    res.status(400).json({ message: 'FromAccount No Undefined' })
  }
  if(!toAccount){
    res.status(400).json({ message: 'ToAccount No Undefined' })
  }
  if(!amount){
    res.status(400).json({ message: 'Amount balance Undefined' })
  } else {  
      res.send(message);
  }
});

// Route to check balance
router.get('/balance/:accountNumber', (req, res) => {
    const { accountNumber } = req.params;
    const message = bank.getBalance(accountNumber);
    if(!accountNumber){
        res.status(400).json({ message: 'Account No Undefined' })
    } else {  
          res.send(message);
    }

  });

// Event listener for transactions
bank.on('transaction', (details) => {
  console.log('Transaction occurred:', details);
  // You can add more logic here, like sending a notification
});

export default router;
