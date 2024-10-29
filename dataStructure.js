//Create an array of your favorite fruits.
const favFruits = ["Mango", "Banana", "Watermelon", "Pineapple", "Apple"];
//I declared a constant variable called favFruits and then i created an array with
// five different fruits in it.

//Add a new fruit to the array.
favFruits.push("Orange");
console.log(favFruits);
//I used the push method to add a new fruit to the array which is orange.
//I now printed out the result

//Remove the last fruit from the array.
favFruits.pop();
console.log(favFruits);
//I used the pop method to remove the last fruit from the array which is now orange.
//I now printed out the result

//Loop through the array and print each fruit.
favFruits.forEach(fruit => {
    console.log(fruit);
  });
//Instead of the regular for loop, i decided to use the forEach() method, because it is cleaner.
//The forEach method takes a function as an argument and applies that function to each element in the array.
//I created the function using arrow function and it takes a single parameter called fruit. 
//For each element in the favFruits array, fruit will represent the current item.
//then i used console.log(fruit) to print each fruit in the array one by one.

//Create a `Float32Array` to store a series of decimal number

//Initialize the array with five decimal values.
const decimalNumbers = new Float32Array([1.5, 2.25, 3.75, 4.1, 5.8]);
console.log(decimalNumbers);
//Float32Array is used to create a typed array 
//that specifically holds 32-bit floating-point numbers (decimal numbers with fractional parts).
//I initialized the Float32Array with five decimal values
//then i printed the Float32Array 

//Change the second value to a new decimal number.
decimalNumbers[1] = 6.35;
console.log(decimalNumbers);
//because array index starts at 0, decimalNumbers[1] will change the second item in the array 
//(which was originally 2.25).
//then i printed the changed Float32Array 

//Print the entire array to the console.
console.log(decimalNumbers);

//Create a JSON object representing a book with the following properties: 
//title, author, year published, and genres (as an array).

const book = {
    title: "All the Men in Lagos are mad!!",
    author: "Wunmi Oyeyemi",
    yearPublished: 2023,
    genres: ["Novel", "Comedy", "Fiction"]
  };
//JSON object is an easy way to represent and organize data related to the book. 
// You can easily access each property like using book.title or book.genres.
//i used const book = {...}; to create a JSON object named book with several properties 
//representing details about a book.
//The properties are:
//title: A string representing the title of the book, "All the Men in Lagos are mad!!".
//author: A string with the author’s name, "Wunmi Oyeyemi".
//yearPublished: A number indicating the publication year, 2023.
//genres: An array containing strings that represent the genres of the book, ["Novel", "Comedy", "Fiction"].

//Convert the object to a JSON string.
const jsonString = JSON.stringify(book);
console.log(jsonString);
//JSON.stringify() takes an object and converts it into a string format, 
//which is useful for transmitting data over a network or saving it in a text-based format.
//i used to const jsonString = JSON.stringify(book); to convert the book object into a JSON string.
//then i printed the resulting JSON string 


//Parse the JSON string back into a JavaScript object and print the author’s name.

// Parse the JSON string back into a JavaScript object
const bookObject = JSON.parse(jsonString);

// Print the author's name
console.log(bookObject.author);

//Create a `Map` to store user details. 
//Each user should have a unique ID as the key and an object with `name` and `email` as the value.

const users = new Map();

// Add users to the Map
users.set(1, { name: "Obed Ugwu", email: "obed@gmail.com" });
users.set(2, { name: "Tomi Longe", email: "tomi@gmail.com" });
users.set(3, { name: "Raymond Red", email: "raymond@gmail.com" });
users.set(4, { name: "Jada Pink", email: "jada@gmail.com" });
users.set(5, { name: "Bruce Wayne", email: "bruce@gmail.com" });

// Print the Map
console.log(users);

// Retrieve and print the name of a user by their ID
console.log(users.get(2));

//Create a `WeakMap` to store user session information. 
//Use objects as keys (representing users) and a session expiration date as the value. 

// Create a new WeakMap to store user session information
const userSessions = new WeakMap();

// Create two user objects and add them to the `WeakMap`.
let user1 = { name: "Tomi Johnson" };
let user2 = { name: "Obed Ugwu" };

// Add user session information to the WeakMap
userSessions.set(user1, "2024-11-01");
userSessions.set(user2, "2024-11-05");

// Print session expiration date for a specific user
console.log(userSessions.get(user1)); 
console.log(userSessions.get(user2)); 

//Set one of the user objects to `null` 
//and demonstrate that it can be garbage collected by checking the `WeakMap`.

// Set user1 to null to remove references to it
user1 = null; 

// Demonstrate that WeakMap does not hold onto the reference
console.log(userSessions.get(user1)); 
console.log(userSessions.get(user2)); 



  












