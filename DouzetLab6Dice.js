// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

function rollDice() 
{
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    //setting the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "z. Dice images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "z. Dice images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() 
{
  //in h3 report how much money was won or lost and the balance
  if (dieSum <= 5)
    {
      outcome = "You lost, please pay me " + 5 + " dollars.";
      balance -= 5;
    } 
  else if (dieSum >= 9)
    {
      outcome = "You won, I will pay you " + 5 + " dollars.";
      balance += 5;
    } 
  else 
    {
      outcome = "It's a draw, nobody wins or loses.";
    }
    
  //reporting the outcome
  banner = die1 + " + " + die2 + " is: " + dieSum;
  document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>" + "Your current balance is: $" + balance;
}

function letsPlay() 
{
  //asking user how many times to roll
  numRolls = prompt("How many times do you want to roll the dice?");

  //if user canceles or leaves it blank, stop
  if (numRolls === null || numRolls === "") 
    {
      return;
    }

  //convert input to a number
  numRolls = Number(numRolls);

  //safeguard against bad inputs
  if (isNaN(numRolls) || numRolls <= 0) 
    {
      alert("Please enter a positive number.");
      return;
    }

  //reseting the balance for this set of rolls
  balance = 0;

  //useing a for-loop to roll
  for (var i = 0; i < numRolls; i++) 
    {
      rollDice();
      whoWon();
    }

  //after loop finishes, print summary
  alert("Game over! After " + numRolls + " rolls, your final balance is $" + balance + ".");
}
