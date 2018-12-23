
const Airplane = require('./1-airplane.js');
function display() {
  console.log(`my plane is: ${Airplane.myAirplane}`)
};
display();

// 직접 방식
const Airplane = require('./1-airplane.js');
console.log(Airplane.displayAirplane());


//ES6 방법 IMPORT
import Airplane from './airplane'; // 더 이상 확장자를 쓰지 않는 것에 주의하라!
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
  });
}
displayFuelCapacity();

// ES6 named IMPORT
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}
displayStaffStatus();

// 전체를 퉁치는 방법도 있다.
import * as flights from './airplane' // 이 경우 flights.displayFuelCapacity 로 써나가야 한다.

// import도 다양한 방식으로 합칠 수 있다.

import { specialty, isVegetarian, isLowSodium } from './menu';
import GlutenFree from './menu';
