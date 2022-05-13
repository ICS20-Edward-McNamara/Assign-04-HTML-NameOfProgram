// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates which rating of movie the user is allowed to watch based on their age 
 */ 
function displayCost() {
  // constants 
  const HST = 0.13
  const SIX_INCH_COST = 5.99
  const FOOT_LONG_COST = 8.99
  const TOPPING_COST = 0.10
  const DRINK_COST = 2.69
  const BACON_COST = 2.09
  const MEATBALL_COST = 1.00
  const TURKEY_COST = 1.50
  const STEAK_COST = 3.00
  const TUNA_COST = 2.00

  // Initializing Variables
  let subtotal = 0;
  let sizeCost = 0;
  let drinkCost = 0;
  let baconCost = 0; 
  let meatCost = 0;


  // input for size
  let sizeChoice = document.getElementById('size')
  let size = sizeChoice.options[sizeChoice.selectedIndex].value
  // if statement for size 
  if (size == "six-inch") {
    sizeCost = SIX_INCH_COST
  } else {
    sizeCost = FOOT_LONG_COST
  }
  
  // input for meat 
  let meatChoice = document.getElementById('meat')
  let meat = meatChoice.options[meatChoice.selectedIndex].value
  // if statement for meat 
  if (meat == "steak") {
    meatCost = STEAK_COST;
  } else if (meat == "turkey") {
    meatCost = TURKEY_COST;
  } else if (meat == "meatball") {
    meatCost = MEATBALL_COST;
  } else if (meat == "tuna") {
    meatCost = TUNA_COST;
  } else {
    meatCost = 0.00
  }
   
  // input for drink
  let drinkChoice = document.getElementById('drink')
  let drink = drinkChoice.options[drinkChoice.selectedIndex].value
  // if statement for drink
  if (drink == "yes") {
    drinkCost = DRINK_COST 
  } else {
    drinkCost = 0
  }
  
  // input for toppings 
  let toppingCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  let toppings = checkbox.length;
  let costOfToppings = toppings * TOPPING_COST;
  if

  // input for extra bacon  
  let baconChoice = document.getElementById('bacon')
  let bacon = baconChoice.options[baconChoice.selectedIndex].value
  // if statement for bacon
  if (bacon == "yes") {
    baconCost = BACON_COST
  } else {
    baconCost = 0.00
  }


  // calculating total 
  subtotal = sizeCost + meatCost + costOfToppings + baconCost + drinkCost
  let tax = subtotal * HST
  let total = subtotal + tax 
   
  // Displaying results 
  document.getElementById('showCost').innerHTML = "$" + total.toFixed(2)
}