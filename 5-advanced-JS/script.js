// Function construction

/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var Jane = new Person('John', 19690, 'designer');
var Mark = new Person('John', 19408, 'retired');

john.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);
*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});
*/

