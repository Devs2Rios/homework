/////////////////////////////////////////////////
// BANKIST APP
'use strict';

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2021-04-01T10:17:24.185Z',
    '2022-08-17T14:11:59.604Z',
    '2022-08-19T17:01:17.194Z',
    '2022-08-23T23:36:17.929Z',
    '2022-08-24T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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
const calcDays = (d1, d2) => Math.floor((d2 - d1) / (24 * 60 * 60 * 1000));
const formatCurr = (locale, curr, num) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
  }).format(num);

const displayMovements = (acc, sorted = false) => {
  containerMovements.innerHTML = '';
  const movsCopy = sorted
    ? [...acc.movements].sort((a, b) => a - b)
    : acc.movements;
  movsCopy.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const daysPassed = calcDays(new Date(acc.movementsDates[i]), new Date());
    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${
        daysPassed === 0
          ? 'Today'
          : daysPassed === 1
          ? 'Yesterday'
          : daysPassed <= 7
          ? `${daysPassed} days ago`
          : Intl.DateTimeFormat(acc.locale).format(
              new Date(acc.movementsDates[i])
            )
      }</div>
      <div class="movements__value">${formatCurr(
        acc.locale,
        acc.currency,
        mov
      )}</div>
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
  labelBalance.textContent = `${formatCurr(acc.locale, acc.currency, balance)}`;
};

const calcDisplaySummary = acc => {
  labelSumIn.textContent = `${formatCurr(
    acc.locale,
    acc.currency,
    acc?.movements?.filter(m => m > 0)?.reduce((a, b) => a + b, 0)
  )}`;
  labelSumOut.textContent = `${formatCurr(
    acc.locale,
    acc.currency,
    Math.abs(acc?.movements?.filter(m => m < 0).reduce((a, b) => a + b, 0))
  )}`;
  labelSumInterest.textContent = `${formatCurr(
    acc.locale,
    acc.currency,
    acc?.movements
      ?.filter(m => m > 0)
      ?.map(dp => (dp * acc.interestRate) / 100)
      ?.filter((int, i, arr) => int >= 1)
      ?.reduce((a, b) => a + b, 0)
  )}`;
};

let liveHour;
const updateUI = acc => {
  // Movements
  displayMovements(acc);
  // Balance
  calcPrintBalance(acc);
  // Summary
  calcDisplaySummary(acc);
  // Rows color
  const gray = 250;
  [...document.querySelectorAll('.movements__row')].forEach(
    (row, i) =>
      i % 2 === 0 &&
      (row.style.backgroundColor = `rgb(${gray} ${gray} ${gray})`)
  );
  // Date
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    //weekday: 'long',
  };
  const now = () => {
    labelDate.textContent = new Intl.DateTimeFormat(
      currentUser.locale,
      options
    ).format(new Date());
  };
  now();
  clearInterval(liveHour);
  liveHour = setInterval(now, 1000);
};

const tick = time => {
  const min = `${Math.floor(time / 60)}`.padStart(2, 0);
  const sec = `${time % 60}`.padStart(2, 0);
  labelTimer.textContent = `${min}:${sec}`;
};

const logOutTimer = () => {
  let time = 300;
  tick(time);
  const timer = setInterval(() => {
    tick(time);
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  }, 1000);
  return timer; // to clear it you need to return it
};

/////////////////////////////////////////////////
// Manipulations

createUsernames(accounts);
let currentUser,
  timer,
  sorted = false;

// Debugging mode
// -------------------------------------------------
const dedugging = false;
// Fake login
if (dedugging) {
  currentUser = account1;
  updateUI(currentUser);
  containerApp.style.opacity = 100;
}
// -------------------------------------------------

btnLogin.addEventListener('click', e => {
  e.preventDefault(); // Prevent submit, enter retrieve in forms
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    setTimeout(() => {
      // Display UI and welcome message
      labelWelcome.textContent = `Welcome back ${
        currentUser.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
      // Clear fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputClosePin.blur(); // looses focus
      updateUI(currentUser);
      if (timer) clearInterval(timer); // resets current timer if exists
      timer = logOutTimer(); // assign timer to keep track
    }, 500);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.round(inputTransferAmount.value);
  const receiverAcc = accounts.find(a => a.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentUser.balance >= amount &&
    receiverAcc?.username !== currentUser.username
  ) {
    currentUser.movements.push(-amount);
    currentUser.movementsDates.push(new Date());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date());
    updateUI(currentUser);
  }
  // Refresh timer
  clearInterval(timer);
  timer = logOutTimer();
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.round(inputLoanAmount.value);
  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    currentUser.movements.push(amount);
    currentUser.movementsDates.push(new Date());
    updateUI(currentUser);
  }
  inputLoanAmount.value = '';
  // Refresh timer
  clearInterval(timer);
  timer = logOutTimer();
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
  // Refresh timer
  clearInterval(timer);
  timer = logOutTimer();
});

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentUser, sorted);
  sorted = !sorted;
  // Refresh timer
  clearInterval(timer);
  timer = logOutTimer();
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
