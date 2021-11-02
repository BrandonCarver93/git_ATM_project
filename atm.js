"use strict";
//TODO: Import necessary values from account.js

const { accBal, myPin } = require("./account");
const prompt = require("prompt-sync")();

function getBalance() {
  console.log(accBal);
  return accBal
 
}
  //TODO: Return the customer's acct. balance



function withdraw(withdrawAmount) {
 let withdrawAmt = parseInt(prompt("How much do you want to withdraw?"));
 let withdrawBal = "Available Balance" + " " + parseInt(accBal - withdrawAmt);
 console.log(withdrawBal);
  }
  
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made


function deposit(depositAmount) {
  let depositAmt = parseInt(prompt("How much do you want to deposit?"));
  let depositBal = "Available Balance" + " " + parseInt(accBal + depositAmt);
  console.log(depositBal);
}
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made


function validatePin(enteredPin) {
  let corrPin = myPin;
  let userPin = "";

  while(userPin != corrPin) {
   userPin = parseInt(prompt("Please Input Pin"));
    if (userPin === corrPin){
      console.log('Confirmed');
    } else {
      console.log("Please input pin again.");
    }
  }
}
  
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.

//TODO: Export these functions
module.exports = {
  aBalance: getBalance,
  aWithdrawl: withdraw,
  aDeposit: deposit,
  aPin: validatePin,

}
