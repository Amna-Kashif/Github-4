// chap 1:
// Problem 1: Character Type Checker

// var char = prompt("Enter a character: ");
// var asciiValue = char.charCodeAt(0);

// if (!char) {
//   alert("Please enter a character.");
// } else if (asciiValue >= 48 && asciiValue <= 57) {
//   alert("You entered a number.");
// } else if (asciiValue >= 65 && asciiValue <= 90) {
//   alert("You entered an uppercase letter.");
// } else if (asciiValue >= 97 && asciiValue <= 122) {
//   alert("You entered a lowercase letter.");
// } else {
//   alert("You entered a special character.");
// }









// 2
// Input: Replace these values to test with different numbers
// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");

// // Compare the two numbers
// if (num1 > num2) {
//     console.log(num1 + " is larger.");
// } else if (num2 > num1) {
//     console.log(num2 + " is larger.");
// } else {
//     console.log("Both numbers are equal.");
// }


// 3
// Prompt the user for a number
// let number = +prompt("Enter a number:");


// // Check if the number is positive, negative, or zero
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }



// 4  Prompt the user for a character
// let checkChar = prompt("Enter any character:")

// // Convert the input to lowercase for case insensitivity
// checkChar = checkChar.toLowerCase();

// // Check if the character is a vowel
// if(checkChar == 'a' || checkChar == 'e' || checkChar == 'i' || checkChar == 'o' || checkChar == 'u')  {
//     console.log(true);
// } else {
//     console.log(false);   
// }


//  5
// a. Store correct password in a JS variable
// let correctPassword = "mySecret123";

// // b. Ask user to enter his/her password
// let userPassword = prompt("Please enter your password:");

// // if (!userPassword) {
// //     console.log("Please enter your password.");
// // } else {
//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password.");
//     } else {
//         console.log("Incorrect password.");
//     }
// // }


// 6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); 



// 7

// Prompt the user to enter time in 24-hour format
// let time = +prompt("Enter time in 24-hour format (e.g., 1900):");


// // Check the validity of the time input
// if (time >= 0 && time < 1200) {
//     console.log("Good Morning! It's " + (time === 0 ? 12 : time / 100) + " AM.");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon! It's " + ((time === 1200) ? 12 : (time / 100) % 12) + " PM.");
// } else if (time >= 1700 && time <= 2359) {
//     console.log("Good Evening! It's " + ((time >= 1300) ? (time / 100 - 12) : time / 100) + " PM.");
// } else {
//     console.log("Invalid time input. Please enter a time between 0000 and 2359.");
// }








// 1

// var studentNames = [];
// console.log(studentNames);

// // 2
// var studentNames = new Array();
// console.log(studentNames);

// // 3
// var studentNames = ["Amna", "Alishba", "Kashif", "Usman"];
// console.log(studentNames);

// // 4
// var numArr = [10, 20, 30, 40, 50];
// console.log(numArr);

// // 5
// var booleanArray = [true, false, true, false];
// console.log(booleanArray);

//  6
// var mixedArray = [25, "Hello", true, 30, "World", false];
// console.log(mixedArray);

// 7
// Initialize an array with education qualifications in Pakistan
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Display the listed qualifications in the browser
// document.write("<h2> Qualifications:</h2>");
// document.write("<ol>"); 

// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ol>");




// 8
// var studentNames = ["John" , "charlie" , "michael"];
// var stuMarks = [370,  320, 300];
// var totalMarks = [500];
// var percentage = [370 * 0.2 , 320  * 0.2 , 300 * 0.2];

// console.log(`Score of ${studentNames[0]} is ${stuMarks[0]}. Percentage ${percentage[0]}% \nScore of ${studentNames[1]} is ${stuMarks[1]}. Percentage ${percentage[1]}% \nScore of ${studentNames[2]} is ${stuMarks[2]}. Percentage ${percentage[2]}% `);




// 9
// Initialize an array with color names
// var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

// // Ask the user for a color to add to the beginning of the array
// var userColor = prompt("What color do you want to add to the beginning of the list?");

// // Add the user's color to the beginning of the array
// colors.unshift(userColor);


// // Display the updated array in the browser's console
// console.log("Updated List of Colors:");
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


// b
// Ask the user for a color to add to the end of the array
// var userColor = prompt("What color do you want to add to the end of the list?");

// // Add the user's color to the end of the array
// colors.push(userColor);
// console.log(userColor);


// // Display the updated array in the browser's console
// console.log("Updated List of Colors after adding a color to the end:");
// console.log(colors);

// // c: Add two more colors to the beginning of the array
// colors.unshift("Black", "White");
// console.log("After adding two colors to the beginning:");
// // Display updated array
// console.log(colors);  

// d: Delete the first color in the array
// colors.shift();
// console.log("After deleting the first color:");
// Display updated array
// console.log(colors);

// e: Delete the last color in the array
// colors.pop();
// console.log("After deleting the last color:");
// Display updated array
// console.log(colors);  

// f: Ask the user for the index and color name to add at the specified index
// var index = prompt("At which index do you want to add a color?");
// var newColor = prompt("What color do you want to add at index " + index + "?");

// // Add the color at the desired index
// colors.splice(index, 0, newColor);  // splice() is used to insert the color at the specified index
// console.log("After adding the color at index " + index + ":");
// // Display updated array
// console.log(colors);  


// g
// Ask the user at which index they want to delete colors
// var index = +prompt("At which index do you want to start deleting color(s)?");

// // Ask the user how many colors they want to delete
// var numToDelete = +prompt("How many color(s) do you want to delete?");

// // Remove the specified number of colors from the array starting at the given index
// colors.splice(index, numToDelete);

// // Display the updated array in the browser's console
// console.log("Updated List of Colors after deletion:");
// console.log(colors);


// 10
// Initialize an array with student scores
// let studentScores = [320, 230, 480, 120, 370];

// // Display the original array of student scores
// console.log("Original Student Scores:");
// console.log(studentScores);

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array in ascending order
// console.log("Student Scores Sorted in Ascending Order:");
// console.log(studentScores);





// Chap 2

// 11
// Initialize an array with student scores
// let studentScores = [78, 92, 56, 89, 65, 99, 73, 81];

// // Display the original array of student scores
// console.log("Original Student Scores:");
// console.log(studentScores);

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array in ascending order
// console.log("Student Scores Sorted in Ascending Order:");
// console.log(studentScores);


// 12 Join the strings:
// Initialize the array with the given strings
// var arr = ["This", " is", " my", " cat"];

// // Use the join() method to combine array elements into a single string
// var singleString = arr.join("");

// // Display the resulting single string in the console
// console.log("Combined String:");
// console.log(singleString);




// 12
// Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// // Copy 3 elements from the cities array to the selectedCities array
// let selectedCities = cities.slice(1, 3);  

// // Display the original cities array
// console.log("Original Cities Array:");
// console.log(cities);

// // Display the selectedCities array
// console.log("Selected Cities Array (first 3 cities):");
// console.log(selectedCities);


// 13
// Initialize an empty array
// var newArr = [];

// Store values one by one using push (FIFO behavior)
// newArr.push("First");
// newArr.push("Second");
// newArr.push("Third");
// newArr.push("Fourth");

// // Display the array after adding elements
// console.log("Array after adding elements (FIFO order):");
// console.log(newArr);

// // Access and remove the values in FIFO order using shift
//  // First element out
// var firstOut = newArr.shift();
// // Second element out 
// var secondOut = newArr.shift(); 

// // Display the values removed in FIFO order
// console.log("Values removed in FIFO order:");
// // "First"
// console.log(firstOut);  
// // "Second"
// console.log(secondOut); 

// // Display the remaining queue after removing elements
// console.log("Array after removing two elements:");
// console.log(newArr);


// 14
// Initialize an empty array
// var stack = [];

// // Store values one by one using push (LIFO behavior)
// stack.push("First");
// stack.push("Second");
// stack.push("Third");
// stack.push("Fourth");

// // Display the stack after adding elements
// console.log("Stack after adding elements (LIFO order):");
// console.log(stack);

// // Access and remove the values in LIFO order using pop
//  // Last element out (Fourth)
// var firstOut = stack.pop(); 
// // Second last element out (Third)
// var secondOut = stack.pop(); 

// // Display the values removed in LIFO order
// console.log("Values removed in LIFO order:");
// console.log(firstOut);  // "Fourth"
// console.log(secondOut); // "Third"

// // Display the remaining stack after removing elements
// console.log("Stack after removing two elements:");
// console.log(stack);
