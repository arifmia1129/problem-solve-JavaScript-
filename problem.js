//Problem no : 1
/* var mobilePrice = 10000;
var mobileBrand = "samsung";
var isSuitableForYou = true; */

//Problem no : 2

/* const mobileBrand = "samsung";
let mobilePrice = 12000; */

//Problem : 3

/* const num1 = 20;
const num2 = 10;

const sum = num1 + num2;
console.log(sum);

const sub = num1 - num2;
console.log(sub);

const mul = num1 * num2;
console.log(mul);

const div = num1 / num2;
console.log(div); */

// Problem 4

/* var num1 = 10;
var num2 = 30;

if (num1 == num2) {
    console.log("Two numbers is equal");
}
else if (num1 < num2) {
    console.log("num2 is greater than num1");
}
else if (num1 > num2) {
    console.log("num1 is greater than num2");
}
else if (num1 >= num2) {
    console.log("num1 is greater or equal than num2");
}
else if (num1 <= num2) {
    console.log("num1 is smaller or equal than num2");
}
else if (num1 != num2) {
    console.log("num1 is not equal num2");
}
else {
    console.log("invalid input so that comparason is not success");
} */

//Problem 5
/* const mobileBrand = "samsung";
let mobilePrice = 10000;
mobilePrice = 12000;

let mobileColor = "black";
mobileColor = "golden";

if (mobileBrand == "samsung" && mobilePrice > 10000) {
    console.log("Mobile ta kinbo");
}
else if (mobilePrice > 12000 || mobileBrand == "samsung") {
    console.log("Phone ta kena jay jehetu brand or price valo ache");
}
else {
    console.log("Amar condition fullfill nahole mobile kinbo na.")
} */

// Problem 6 

/* let instituteName = "bpi";

const result = instituteName.toLowerCase();

if (result == "vtti") {
    console.log("Eta amar institute name.")
}
else {
    console.log("Eta amar institute er name na");
} */

//Problem 7 
/* var number = 7;
while (number < 20) {
    if (number % 2 == 1) {
        console.log(number);
    }
    number++;
} */

//Problem 8 

/* const array = ["vtti", "bpi", "rpi", "dpi", "mpi", "pbi"];

const arrayLength = array.length;
console.log(arrayLength);

array.push("iitb");

if (array.indexOf("iitb") == -1) {
    console.log("IITB is not listed");
}
else {
    console.log("IITB is already listed");
} */

// Problem 9 
/* const array = ["vtti", "bpi", "rpi", "dpi", "mpi", "pbi"];

for (const institute of array) {
    console.log(institute);
}
 */

// Problem 10 
/* const numbers = [20, 100, 150, 16, 17, 89, 90, 300, 288, 2, 60, 50];

for (const number of numbers) {
    if (number > 80) {
        console.log(number);
    }
} */

//Problem 11

/* function threeNumbersMultiplication(num1, num2, num3) {
    const result = num1 * num2 * num3;
    return result;
}

var multiplication = threeNumbersMultiplication(2, 3, 4);
console.log(multiplication); */

//Problem 12
/* var myMobile = {
    brand: "samsung",
    price: 10000,
    color: "black",

};

var herMobile = {
    brand: "nokia",
    price: 16000,
    color: "black"
};

console.log(herMobile);

myMobile["color"] = "golden";
console.log(myMobile); */

// Problem:1
/* function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const feet = 10;

var result = feetToInch(feet);
console.log(result); */

/* function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}

const centimeter = 75;
const result = centimeterToMeter(centimeter);
console.log(result); */


/* function bookPagesCal(book1, book2, book3) {
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    const firstBookTotal = book1 * 100;
    const secondBookTotal = book2 * 200;
    const thirdBookTotal = book3 * 300;

    const TotalPages = firstBookTotal + secondBookTotal + thirdBookTotal;

    return TotalPages;
}

const result = bookPagesCal(1, 1, 1);
console.log(result); */


/* const friendList = ["BorhanKabirShahin", "Manik", "Shuvo", "Naim"];

let largestName = friendList[0];

for (i = 0; i < friendList.length; i++) {
    if (largestName.length < friendList[i].length) {
        largestName = friendList[i];
    }
}
console.log(largestName); */


const arr = [20, 12, 2, -3, 4, 6, 8, -9, 3, 23, 55, 24, 21];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    }
    console.log(arr[i]);
}
