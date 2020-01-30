/**************************
* Varibales and data types
**************************/
/*
var firstName = 'Steven';
console.log(firstName);

var lastName = 'Coaila';
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

// Variable naming rules
var _3years = 3;
var johMark = 'Luis and Pepe';
var ifs = 23;
*/

/**************************
* Varibales mutation an type coercion
**************************/
/*
var firstName = 'Steven';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/**************************
* Basic operators
**************************/
/*
var year, yearSteven, yearJuan;
now = 2020;
ageSteven = 18;
ageJuan = 33;

// Math operators
yearSteven = now - ageSteven;
yearJuan = now - ageJuan;

console.log(yearSteven);

console.log(now + 2)
console.log(now * 2)
console.log(now / 2)

// Logical operators
var stevenOlder = ageSteven > ageJuan;
console.log(stevenOlder)

// Typeof operator
console.log(typeof stevenOlder)
console.log(typeof ageSteven);
console.log(typeof 'Steven is younger than Juan');
var x;
console.log(typeof x);
*/

/**************************
* Operator precedence
**************************/
/*
var now = 2020;
var yearSteven = 2002;
var fullAge = 18;

// Multiple operators
var isFullAge = (now - yearSteven) >= fullAge; // True
console.log(isFullAge);

// Grouping
var ageSteven = now - yearSteven;
var ageJuan = 35;
var average = (ageSteven + ageJuan) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //  32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/***********************************************************************
* CODING CHALLENDE 1 ***************************************************
***********************************************************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height^2
= mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information
about whether Mark has a higher BMI than John
4. Prin a string to the console containing the
variable form step 3. (Something like "Is Mark's BMI higher than John's true").

GOOD LUCK :)
*/
/*
var isMarkHigher, isJohnHigher;

var massMark = 73;
var heightMark = 1.80;

var massJohn = 90;
var heightJohn = 1.90;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

isJohnHigher = BMIJohn > BMIMark;
isMarkHigher = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigher + ' = ' + BMIMark);
console.log('Is John\'s BMI higher than Mark\'s? ' + isJohnHigher + ' = ' + BMIJohn);
*/

/**************************
* If / else statements
**************************/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' isn\'t married!');
}

var isMarried = true;
if (civilStatus === true) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' isn\'t married!');
}

var isMarkHigher, isJohnHigher;

var massMark = 73;
var heightMark = 1.80;

var massJohn = 90;
var heightJohn = 1.90;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI higher than John\'s');
} else {
  console.log('John\'s BMI higher than Mark\'s');
}

// isJohnHigher = BMIJohn > BMIMark;
// isMarkHigher = BMIMark > BMIJohn;
*/

/**************************
* Boolean logic
**************************/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age > 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/**************************
* The ternary operator and switch statements
**************************/
/*
var firstName = 'John';
var age = 17;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks bear.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'bear' : 'juice';
console.log(drink);

/*if (age >= 18) {
  var drink = 'bear';
} else {
  var drink = 'juice';
}*/
/*
// Switch statement
var job = 'instructor';

switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

age = 34;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age > 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/

/**************************
* Truthy and Falsy values and equality operators
**************************/

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values
/*
var height = 0;

if (height || height === 0) {
  console.log('variable is defined');
} else {
  console.log('variable has NOT been defined');
}

// Equality operators
if (height === '23') {
  console.log('The == operator does type coercion!');
}
*/

/***********************************************************************
* CODING CHALLENDE 2 ***************************************************
***********************************************************************/
/*
John and Mike both play basketball in different teams. In the lastest 3 games,
John's team scored 89,
120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest avergage score), and print
the winner to the console. Also include the average score to show different winners.
3. Then change the scores to show differents winners. Don't forget to take
into account there might be 3 draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like beofre, log the average winner to the console. HITN: you will need the && operator
to take the decision. If you can't solve this one, jus watch the solution, it's not problem :)
5. Like before, change the score to generate different winners, keeping in mind there
might be draws.

GOOD LUCK :)
*/
/*
var johnScore_1 = 89; 
var johnScore_2 = 120; 
var johnScore_3 = 103;

var mikeScore_1 = 116; 
var mikeScore_2 = 94; 
var mikeScore_3 = 123;

var maryScore_1 = 97; 
var maryScore_2 = 134; 
var maryScore_3 = 105;

var johnAverageTeam = (johnScore_1 + johnScore_2 + johnScore_3) / 3
var mikeAverageTeam = (mikeScore_1 + mikeScore_2 + mikeScore_3) / 3
var maryAverageTeam = (maryScore_1 + maryScore_2 + maryScore_3) / 3

console.log('John = ' + johnAverageTeam);
console.log('Mike = ' + mikeAverageTeam);
console.log('Mary = ' + maryAverageTeam);

if (johnAverageTeam > mikeAverageTeam && johnAverageTeam > maryAverageTeam) {
  console.log('John\'s team average is higher than Mike\'s and  Mary\'s team average! ' + johnAverageTeam);
} else if (maryAverageTeam > johnAverageTeam && maryAverageTeam > mikeAverageTeam) {
  console.log('Mary\'s team average is higher than Mike\'s and John\'s team average! ' + johnAverageTeam);
} else if (mikeAverageTeam > johnAverageTeam && mikeAverageTeam > maryAverageTeam) {
  console.log('Mike\'s team average is higher than John\'s  and Mary\'s team average! ' + mikeAverageTeam);
} else {
  console.log('There is a draw');
}
*/

/**************************
* Functions
**************************/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJane, ageJohn, ageMike);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.')
  }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/**************************
* Function Statements and Expressions
**************************/

// Function declaration
//function whatDoYouDo (job, firstName) {}

// Function expression
/*
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a car in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/**************************
* Arrays
**************************/
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') == -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/

/***********************************************************************
* CODING CHALLENDE 3 ***************************************************
***********************************************************************/
/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% of the bill when
the bill between $50 and $200, and 10% if the bill is more than $200.

In the end , John would like to have 2 arrays 
1) Containing all three tips (One for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of value, simply multiply if with 20/100 = 0.2)

GOOD LUCK
*/
/*
var restaurantBill = [124, 48, 268];
var restaurantTip = [];
var restaurantTotal = [];

var calculateTip = function (bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

for (var i = 0; i < restaurantBill.length; i++) {
  restaurantTip.push(calculateTip(restaurantBill[i]));
  restaurantTotal.push(restaurantTip[i] + restaurantBill[i])
}

console.log('> Tip for each restaurant ');
restaurantTip.forEach(function (value, index) {
  console.log('   > Tip N°' + (index + 1) + ' = ' + value)
});

console.log('> Total = Tip + Bill for each restaurant ');
restaurantTotal.forEach(function (value, index) {
  console.log('   > Total N°' + (index + 1) + ' = ' + value)
});
*/

/**************************
* Objects and properties
**************************/
/*
// Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/

/**************************
* Objects and method
**************************/
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/***********************************************************************
* CODING CHALLENDE 4 ***************************************************
***********************************************************************/
/*
Let's remember the first coding challenge where Mark and John compared their
BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an objet with properties for their full name,
mass, and height.
2. Then, add a method to each object to calculatte the BMI. Save the BMI
to the object and also return it from the method.
3. In the end, log to the console who the heighest BMI, together with
the full name and the respective BMI, Don't. forget they might have the
same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

GOOD LUCK :)
*/
/*
function higherBMI (mark, john) {
  if (mark.bmi > john.bmi) {
    console.log(' > Mark\'s BMI is higher than John\'s BMI');
  } else if (john.bmi > mark.bmi) {
    console.log(' > John\'s BMI is higher than Mark\'s BMI');
  } else {
    console.log(' > John\'s BMI is the same as Mark\'s BMI');
  }
}

var mark = {
  fullName: 'Mark Smith',
  mass: 80,
  height: 1.80,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
  }
};

mark.calcBMI();
console.log('Mark\'s BMI = ' + mark.bmi)

var john = {
  fullName: 'John Smith',
  mass: 70,
  height: 1.77,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height) 
  }
}

john.calcBMI();
console.log('Mark\'s BMI = ' + john.bmi)
  
higherBMI(mark, john);

*/

/**************************
* Loop and iteration
**************************/
/*
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

var john = ['Steven', 'Coaila', 2002, 'front-end', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
*/
/***********************************************************************
* CODING CHALLENDE 5 ***************************************************
***********************************************************************/
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: 'John Smith',
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  totalPay: [],
  calcTip: function () {
    for (var i = 0; i < this.billValues.length; i++) {
      var tip;
      if (this.billValues[i] < 50) {
        // 20%
        tip = this.billValues[i] * 0.2;
      } else if (this.billValues[i] >= 50 && this.billValues < 200) {
        // 15%
        tip = this.billValues[i] * 0.15;
      } else {
        // 10%
        tip = this.billValues[i] * 0.1;
      }
      this.tips.push(tip);
      this.totalPay.push(tip + this.billValues[i]);
    }
  }
}

var mark = {
  fullName: 'Mark Miller',
  billValues: [77, 375, 110, 45],
  tips: [],
  totalPay: [],
  calcTip: function () {
    for (var i = 0; i < this.billValues.length; i++) {
      var tip;
      if (this.billValues[i] < 100) {
        // 20%
        tip = this.billValues[i] * 0.2;
      } else if (this.billValues[i] >= 100 && this.billValues < 300) {
        // 10%
        tip = this.billValues[i] * 0.1;
      } else {
        // 25%
        tip = this.billValues[i] * 0.25;
      }
      this.tips.push(tip);
      this.totalPay.push(tip + this.billValues[i]);
    }
  }
}

var average = function (person) {
  var sum = 0;
  for (var i = 0; i < person.tips.length; i++) {
    sum += person.tips[i];
  }
  return sum / person.tips.length;
}

var higherAverage = function (person1, person2) {
  if (person1.average > person2.average) {
    console.log(person1.fullName + ' has the higher tip average');
  } else if (person2.average > person1.average) {
    console.log(person2.fullName + ' has the higher tip average');
  } else {
    console.log(person1.fullName + ' and ' + person2.fullName + ' have the same tip average');
  }
}

john.calcTip();
mark.calcTip();
console.log(john, mark);

john.average = average(john);
mark.average = average(mark);
console.log(john, mark);

higherAverage(john, mark);