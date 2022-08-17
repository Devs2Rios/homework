/////////////////////////////////////////////////
// BANKIST APP
'use strict';

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Util

const displayMovements = (movs, sorted = false) => {
  containerMovements.innerHTML = '';
  const movsCopy = sorted ? [...movs].sort((a, b) => a - b) : movs;
  movsCopy.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accts) {
  accts.forEach(
    usr =>
      (usr.username = usr.owner
        .toLowerCase()
        .split(' ')
        .map(word => word[0])
        .join(''))
  );
};

const calcPrintBalance = acc => {
  const balance = acc.movements.reduce((a, b) => a + b);
  acc.balance = balance;
  labelBalance.textContent = `${balance.toFixed(2)}€`;
};

const calcDisplaySummary = acc => {
  labelSumIn.textContent = `${acc?.movements
    ?.filter(m => m > 0)
    ?.reduce((a, b) => a + b, 0)}€`;
  labelSumOut.textContent = `${Math.abs(
    acc?.movements?.filter(m => m < 0).reduce((a, b) => a + b, 0)
  )}€`;
  labelSumInterest.textContent = `${acc?.movements
    ?.filter(m => m > 0)
    ?.map(dp => (dp * acc.interestRate) / 100)
    ?.filter((int, i, arr) => int >= 1)
    ?.reduce((a, b) => a + b, 0)}€`;
};

const updateUI = acc => {
  // Movements
  displayMovements(acc.movements);
  // Balance
  calcPrintBalance(acc);
  // Summary
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////
// Manipulations

createUsernames(accounts);
let currentUser,
  sorted = false;

btnLogin.addEventListener('click', e => {
  e.preventDefault(); // Prevent submit, enter retrieve in forms
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentUser.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputClosePin.blur(); // looses focus
    updateUI(currentUser);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(a => a.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentUser.balance >= amount &&
    receiverAcc?.username !== currentUser.username
  ) {
    currentUser.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentUser);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    currentUser.movements.push(amount);
    updateUI(currentUser);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    currentUser.username === inputCloseUsername.value &&
    currentUser.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentUser.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentUser?.movements, sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////

// Practice

// Check the movements in the terminal
labelBalance.addEventListener('click', () => {
  const movsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movsUI);
});

// 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((a, b) => a + b);

console.log(bankDepositSum);

// 2
const deps1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

const deps1000reduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((a, b) => (b >= 1000 ? ++a : a), 0);
// a++ cannot be used because it always return the old value
// but you can use ++a

console.log(deps1000);
console.log(deps1000reduce);

// 3
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      /*{
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      },*/
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 4
const toTitle = title => {
  const exceptions = ['a', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word, i) =>
      i > 0 && exceptions.includes(word)
        ? word
        : `${word[0].toUpperCase()}${word.slice(1)}`
    )
    .join(' ');
  return titleCase;
};

console.log(toTitle('the napalm in the morning'));
console.log(toTitle('minted on ethereum'));

/////////////////////////////////////////////////
