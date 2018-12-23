class Surgeon {
  constructor(namess, departmentss) {
    this._name = namess; // 뒤의 name은 constructor 파라미터 값 name과 동일
    this._department = departmentss;
  }

  get named() { // 여기의 named하고 위의 namess, this._name는 다른 것을 지칭하므로 글자가 달라도 괜찮다. 하지만! get에서 지정한 명칭으로 console.log 해야 함을 명심하라!
    return this._name;
  }

  get departmentd() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


console.log(surgeonCurry.named); // namess, name이 아니라 named 이다!!
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);


// ------------------------------------------------------------------------

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() { // 오직 HospitalEmployee class에서만 쓸 수 있다!!
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
