// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
console.log("--Task 1 - Variables");
let principal = 200000;
let interestRate = 0.05;
let years = 30;

const name = "Maryam Mosstoufi";

console.log(name);
console.log("Principal =", principal);
console.log("Interest Rate =", interestRate);
console.log("Years =", years);

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate.

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12.

Create another variable called `periods` and give it the value of years*12.
*/
console.log("--Task 1.5 Monthly Interest Rate & Periods");

let monthlyInterestRate = interestRate / 12;
let periods = years * 12;

console.log("Monthly Interest Rate =", monthlyInterestRate);
console.log("Periods =", periods);


// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
console.log("--Task 2 - Monthly Rate");

let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
let denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
let monthlyRate = principal * (numerator / denominator);

console.log("Monthly Rate =", monthlyRate.toFixed(2));

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
console.log("--Task 3 - Mortgage Calculator");

function mortgageCalculator() {
  let principal = 200000;
  let interestRate = 0.05;
  let years = 30;

  const name = "Maryam Mosstoufi";

  let monthlyInterestRate = interestRate / 12;
  let periods = years * 12;

  let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
  let denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
  let monthlyRate = (principal * (numerator / denominator)).toFixed(2);

  console.log(`${name}, ", your monthly rate is $", ${monthlyRate}`);
}
mortgageCalculator();


// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/
console.log("--Task 4 - Mortgage Calculator With Parameters");

function mortgageCalculatorWithParameters(principal, interestRate, years) {
  let monthlyInterestRate = interestRate / 12;
  let periods = years * 12;

  let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
  let denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
  let monthlyRate = (principal * (numerator / denominator)).toFixed(2);
  console.log("Monthly Rate Using Parameters = " + monthlyRate);
}

mortgageCalculatorWithParameters(200000, 0.05, 30);

// // 🏡 Task 5: Conditionals
// /* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

// Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
// */
console.log("--Task 5 - Mortgage Calculator With Credit Score");

function mortgageCalculatorWithCreditScore(principal, interestRate, years, creditScore) {

  if (creditScore > 740) {
    interestRate -= 0.005;
  } else if (creditScore < 660) {
    interestRate += 0.005;
  };

  let monthlyInterestRate = interestRate / 12;
  let periods = years * 12;

  let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
  let denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
  let monthlyRate = (principal * (numerator / denominator)).toFixed(2);

  console.log("Monthly Rate Using Credit Score = " + monthlyRate);
}

mortgageCalculatorWithCreditScore(200000, 0.05, 30, 780);

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
console.log("--Task 6 - Variablle Interest Rate");

function variableInterestRate(principal, interestRate, years) {
  let minInterestRate = interestRate - 0.02;
  let maxInterestRate = interestRate + 0.02;
  let i = minInterestRate;

  for (i; i <= maxInterestRate; i += 0.005) {

    interestRate = i;
    monthlyInterestRate = interestRate / 12;
    numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
    monthlyRate = principal * (numerator / denominator);

    console.table(name, ",with an interest rate of ", interestRate.toFixed(3), " your monthly rate is $", monthlyRate.toFixed(0));
  };
}

variableInterestRate(200000, 0.04, 30);


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
console.log("--Stretch 1 - Monthly Spending");

let propertyTax = 5000;
let homeownerInsurance = 2000;
let hoaFees = 3000;

let totalMonthlySpending = monthlyRate + ((propertyTax + homeownerInsurance + hoaFees) / 12);
console.log("Total Monthly Spending =", totalMonthlySpending);

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
console.log("--Stretch 2 - Maximum Loan");

let monthlyPayment = 4000;
let newInterestRate = 0.02;
interestRate = newInterestRate;
monthlyInterestRate = interestRate / 12;
numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
let maxLoan = monthlyPayment / (numerator / denominator);

console.log("Max Loan = $", maxLoan.toFixed(0));

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */
console.log("--Stretch 3 - Window Prompt");

let customInterestRate = prompt("Enter Interest Rate");
let customMonthlyPayment = prompt("What is the maximum you are willing to pay monthly?")
interestRate = customInterestRate;
monthlyInterestRate = interestRate / 12;
numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
let customMaxLoan = customMonthlyPayment / (numerator / denominator);
window.prompt("Your max affordable loan will be ", customMaxLoan.toFixed(0));
console.log("Interest Rate Entered =", customInterestRate);
console.log("Monthly Rate Entered =", customMonthlyPayment);
console.log("Max Loan Calculated =", customMaxLoan.toFixed());
/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
console.log("--Stretch 4 -");

function arrayInterestRate() {
  let arrayOfInterestRates = [0.2, 0.3, 0.4, 0.5, 0.6];

  for (i = 0; i < arrayOfInterestRates.length; i++) {

    interestRate = arrayOfInterestRates[i];
    monthlyInterestRate = interestRate / 12;
    numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    denominator = (Math.pow((1 + monthlyInterestRate), periods)) - 1;
    monthlyRate = principal * (numerator / denominator);

    console.table(name, ",with an interest rate of ", interestRate.toFixed(3), " your monthly rate is $", monthlyRate.toFixed(0));
  };
}

arrayInterestRate();
