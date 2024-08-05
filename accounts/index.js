import { Router } from 'express';

const router = Router();

// Sample account holder data
let accountHolders = [
  { accNo: '001', accName: 'Alice Johnson', city: 'New York', mobileNo: '1234567890' },
  { accNo: '002', accName: 'Bob Smith', city: 'Los Angeles', mobileNo: '0987654321' },
  // Add more account holders as needed
];

// Get all account holder details
router.get('/', (req, res) => res.json(accountHolders));

// Get account holder details by accNo
router.get('/:accNo', (req, res) => {
  const { accNo } = req.params;
  const accountHolder = accountHolders.find(account => account.accNo === accNo);
  accountHolder ? res.json(accountHolder) : res.status(404).json({ message: 'Account holder not found' });
});

// Add a new account holder
router.post('/', (req, res) => {
  const newAccountHolder = req.body;
  accountHolders.push(newAccountHolder);
  res.status(201).json(newAccountHolder);
});

// Modify city for a specific account holder (if required)
router.put('/:accNo', (req, res) => {
  const { accNo } = req.params;
  const { city } = req.body;
  const accountHolder = accountHolders.find(account => account.accNo === accNo);
  if (accountHolder) {
    accountHolder.city = city;
    res.json(accountHolder);
  } else {
    res.status(404).json({ message: 'Account holder not found' });
  }
});

// Delete one account holder record
router.delete('/:accNo', (req, res) => {
  const { accNo } = req.params;
  const accountIndex = accountHolders.findIndex(account => account.accNo === accNo);
  if (accountIndex !== -1) {
    const [deletedAccount] = accountHolders.splice(accountIndex, 1);
    res.json(deletedAccount);
  } else {
    res.status(404).json({ message: 'Account holder not found' });
  }
});

export default router;
