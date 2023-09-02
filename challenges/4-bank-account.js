const bankAccount = {
  currentBalance: 250,
  transactions: [
    {
      prevAmount: 350,
      newAmount: 250,
      reason: "Donation",
    },
  ],
};

const donateMoney = (amount, onSuccess, onFail) => {
  withdrawMoney(bankAccount, amount, onSuccess, onFail, "Donation");
};
const payRent = (amount, onSuccess, onFail) => {
  withdrawMoney(bankAccount, amount, onSuccess, onFail, "Rent");
};

const withdrawMoney = (bankAccount, amount, onSuccess, onFail, reason) => {
  const currentBalance = bankAccount.currentBalance;

  if (currentBalance >= amount) {
    const newAmount = currentBalance - amount;
    bankAccount.currentBalance = newAmount;
    bankAccount.transactions.push({
      prevAmount: currentBalance,
      newAmount: newAmount,
      reason: reason,
    });
    onSuccess();
  } else {
    onFail();
  }
};

/**
 * TEST CODE. DO NOT EDIT
 */

const onSuccessEnglish = () => {
  console.log("Payment successful! Thank you!");
};
const onFailEnglish = () => {
  console.log("You do not have enough money to make this payment.");
};

const onSuccessDutch = () => {
  console.log("Betaling geslaagd! Dank u!");
};
const onFailDutch = () => {
  console.log("U heeft niet voldoende saldo om deze betaling te doen.");
};

donateMoney(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

payRent(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

donateMoney(100, onSuccessDutch, onFailDutch);
console.log(bankAccount);

/**
  * The console should print out the following:
  Payment successful! Thank you!
  {
  currentBalance: 150,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' }
  ]
  }
  Payment successful! Thank you!
  {
  currentBalance: 50,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' },
    { prevAmount: 150, newAmount: 50, reason: 'Rent' }
  ]
  }
  U heeft niet voldoende saldo om deze betaling te doen.
  {
  currentBalance: 50,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' },
    { prevAmount: 150, newAmount: 50, reason: 'Rent' }
  ]
  }
  * 
  */
