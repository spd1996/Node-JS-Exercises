import EventEmitter from 'events';

class Bank extends EventEmitter {
  constructor() {
    super();
    this.accounts = {};
  }

  createAccount(accountNumber, initialBalance = 0) {
    if (this.accounts[accountNumber]) {
      return `Account ${accountNumber} already exists.`;
    }
    this.accounts[accountNumber] = { balance: initialBalance };
    return `Account ${accountNumber} created with balance ${initialBalance}`;
  }

  deposit(accountNumber, amount) {
    if (!this.accounts[accountNumber]) {
      return `Account ${accountNumber} does not exist.`;
    }
    this.accounts[accountNumber].balance += amount;
    this.emit('transaction', { accountNumber, type: 'deposit', amount, balance: this.accounts[accountNumber].balance });
    return `Deposited ${amount} to account ${accountNumber}. New balance: ${this.accounts[accountNumber].balance}`;
  }

  withdraw(accountNumber, amount) {
    if (!this.accounts[accountNumber]) {
      return `Account ${accountNumber} does not exist.`;
    }
    if (this.accounts[accountNumber].balance < amount) {
      return `Insufficient balance in account ${accountNumber}.`;
    }
    this.accounts[accountNumber].balance -= amount;
    this.emit('transaction', { accountNumber, type: 'withdrawal', amount, balance: this.accounts[accountNumber].balance });
    return `Withdrew ${amount} from account ${accountNumber}. New balance: ${this.accounts[accountNumber].balance}`;
  }

  transfer(fromAccount, toAccount, amount) {
    if (!this.accounts[fromAccount] || !this.accounts[toAccount]) {
      return `One or both accounts do not exist.`;
    }
    if (this.accounts[fromAccount].balance < amount) {
      return `Insufficient balance in account ${fromAccount}.`;
    }
    this.accounts[fromAccount].balance -= amount;
    this.accounts[toAccount].balance += amount;
    this.emit('transaction', { fromAccount, toAccount, type: 'transfer', amount, fromBalance: this.accounts[fromAccount].balance, toBalance: this.accounts[toAccount].balance });
    return `Transferred ${amount} from account ${fromAccount} to account ${toAccount}. New balances: From ${this.accounts[fromAccount].balance}, To ${this.accounts[toAccount].balance}`;
  }

  getBalance(accountNumber) {
    if (!this.accounts[accountNumber]) {
      return `Account ${accountNumber} does not exist.`;
    }
    return `Balance for account ${accountNumber} is ${this.accounts[accountNumber].balance}`;
  }

}

export default new Bank();
