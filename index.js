"use strict";
const {aBalance, aWithdrawl, aDeposit, aPin} = require("./atm")
const prompt = require("prompt-sync")();
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  aPin();
}
accessATM();
 
//TODO: Call accessATM function

function mainMenu() {
   let userInput = prompt("What would you like to do? \n1.View Balance \n2.Deposit Now \n3.Withdraw now \n4.Quit \n5.Restart")
  switch(userInput) {
    case "1":
      aBalance()
      break;
    case "2":
      aDeposit()
      break;
    case "3":
      aWithdrawl()
      break;
    case "4":
      break;
    case "5":
      mainMenu();
      default:
        return
      }
  }
  mainMenu()
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit


//TODO: Call mainMenu function to start our app!

