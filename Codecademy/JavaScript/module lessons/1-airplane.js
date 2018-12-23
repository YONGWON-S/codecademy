// 기본 export 방식
const Airplane = {};
Airplane.myAirplane = 'StarJet';
module.exports = Airplane;

// 직접 export 방식
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//ES6 방법 EXPORT
const Airplane = {};
Airplane.availableAirplanes = [
  {name: 'AeroJet', fuelCapacity: 800},
  {name: 'SkyJet', fuelCapacity: 500}
];
export default Airplane;

//ES6 named EXPORT
let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];
let flightRequirements = {
  requiredStaff: 4,
};
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availablesStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
export { availableAirplanes, flightRequirements, meetsStaffRequirements }

// export 를 변수 앞에 직접 붙이는 방법

export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
  	return true
  } else {
    return false
  }
}

// 이렇게 축약하는 방법도 있다.
export { availableAirplanes as aircrafts, flightRequirements as flightReqs }

// export를 다양한 방식으로 합칠 수도 있다.
export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
