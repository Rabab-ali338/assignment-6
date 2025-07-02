//  chapter no 17: array and loop

// question no 1: declear and initialize an array with 5 Element.?

var myArray = [ 8, 22, 19, 1, 7];
console.log(myArray);

// question no 2:  declear and initialize a multimensional array representing the following matrix?

var matrices = [0, 1, 2, 3]; 
var materices1 =[ 0,1,2,1];
var materices2 =[2,1,0,1];
var materices3 =[1,2,1,0];
var matrix =[matrices, materices1, materices2, materices3];
console.log(matrix);

// question no 3: write a program to print numeric counting from 1 to 10 using a for loop?

for (var i=1; i <=10; i++){
    console.log(i);
}
//  question no 4: write a program to print multiplication table of any number using for loop. table number and lenght
//   should be taken as an input from user?

var  favNumber = +prompt("Enter your favorite number");
for( var i =1; i<=10; i++){
    console.log(favNumber + " x " + i + " = " + favNumber*i)
}
var  favNumber = +prompt("Enter your favorite number");
for( var i =1; i<=15; i++){
    console.log(favNumber + " x " + i + " = " + favNumber*i)
}

// question no :5 write a program to print items of the following array using for loop:

 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for (var i = 0; i < fruits.Lenght; i++ ){
          console.log(fruits[i]);
}

// question no 6: Generate the following series in your brower. series
// example output.
// a. Counting: 1,2,3,4,5,6,7,8,9,10
// b. Reverse counting: 10,9,8,7,6,5,4,3,2,1
// c. Even: 0,2,4,6,8,10,12,14,16,18,20
// d. Odd: 1,3,5,7,9,11,13,15,17,19
// e. Series: 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k,

document.write("<h1>Counting</h1>");
for(var i=1; i <=10; i++){
    document.write(i + ",");
}
document.write("<h1>Reverse counting</h1>");
for(var i=10; i <=0; i++){
    document.write(i +",");
}
document.write("<h1>Even</h1>");
for(var i =0; i <=20; i+=2){
    document.write(i +",");
}
document.write("<h1>Odd</h1>");
for(var i=1; i <=20; i+=2){
    document.write(i + ",");
}
document.write("<h1>Series</h1>");
for(var i=2; i <=20; i+=2){
    document.write(i + "k,");
}

// question no 7: you have an array
// A = ["cake," "apple pie," "cookie," "chips," "patties"];
// write a program to enable "serach by user input" in an Array.
// after searching , prompt the user whether the given item is found in the list or not . Example

// var item = ["cake," "apple pie," "cookie," "chips," "patties"];
var userInput1 = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
alert("cookie is avaiable in our bakery");
var items = ["cake," "apple pie," "cookie," "chips," "patties"];
var userInput2 = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    alert("We are sorry, apple pie is not avaiable in our bakery");
    alert("Thank you for visting our bakery!");

//   question no 8: write a program to find the largest number in the given array?

var numbers = [24, 53, 78, 91, 12];
console.log("this is largest number in the array: 91");

//   question no 9: write a program to find the small number in the given array?

var numbers = [24, 53, 78, 91, 12];
console.log("this is small number in the array: 12");

// question no 10: write a program to print multiples of 5 between 1 and 100?

for ( var i = 1; i<=100; i++ ){
    if (i % 5 === 0){
        console.log(i);

    }
}

                        //        < The End Of The Code chapter 17 and 20 >         //












