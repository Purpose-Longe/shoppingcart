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
//it will give a single string representing the entire book object. 
//that will be in JSON format, making it easy to store or send as part of an API request or response.


//Parse the JSON string back into a JavaScript object and print the author’s name.

// Parse the JSON string back into a JavaScript object
const bookObject = JSON.parse(jsonString);
//JSON.parse() is used to converts a JSON-formatted string and into a JavaScript object.
//After parsing, bookObject will be a regular JavaScript object 
//with the same properties as the original book object.
//so i can work with bookObject as a normal JavaScript object again, 
//and access properties like bookObject.title or bookObject.genres.

// Print the author's name
console.log(bookObject.author);
//this will access the author property of the bookObject and print it

//Create a `Map` to store user details. 
//Each user should have a unique ID as the key and an object with `name` and `email` as the value.

const users = new Map();
//A Map is a special JavaScript object designed to store key-value pairs, 
//where each key is unique, and values can be of any type.
//i used const users = new Map(); to create a new Map object named users.

// Add users to the Map
users.set(1, { name: "Obed Ugwu", email: "obed@gmail.com" });
users.set(2, { name: "Tomi Longe", email: "tomi@gmail.com" });
users.set(3, { name: "Raymond Red", email: "raymond@gmail.com" });
users.set(4, { name: "Jada Pink", email: "jada@gmail.com" });
users.set(5, { name: "Bruce Wayne", email: "bruce@gmail.com" });
//i used the users.set(key, value); to add entries to the Map. 
// Each set takes two arguments which are:
//key: A unique identifier for each user (in this case, the ID of the user).
//value: An object containing name and email properties for each user.


// Print the Map
console.log(users);
//i printed the entire Map object users to the console.

// Retrieve and print the name of a user by their ID
console.log(users.get(2).name);
//if i use users.get(2); the .get() method will retrieve the value associated with the key 2 in the users Map. 
//which will be the name and email of the user with ID 2.
//so i use console.log(users.get(2).name); to specifically access the name property of the object associated with ID 2.

//Create a `WeakMap` to store user session information. 
//Use objects as keys (representing users) and a session expiration date as the value. 

// Create a new WeakMap to store user session information
const userSessions = new WeakMap();
//A WeakMap is like a Map, but,
//The keys in a WeakMap must be objects (not primitive values like strings or numbers).
//The values can be any type.
//The entries in a WeakMap are garbage-collected if there are no other references to the key object, 
//which makes it useful for storing data associated with objects that may be removed from memory.

// Create two user objects and add them to the `WeakMap`.
let user1 = { name: "Tomi Johnson" };
let user2 = { name: "Obed Ugwu" };
//i created Two user objects, user1 and user2 with diff name properties.
//The objects (user1 and user2) are independent entities in memory, and they can each act as a unique key in a WeakMap.
//Since WeakMap only accepts objects as keys, they are perfect for associating additional data with each 
//user that will automatically be garbage-collected if user1 or user2 are no longer referenced elsewhere in your code.

// Add user session information to the WeakMap
userSessions.set(user1, "2024-11-01");
userSessions.set(user2, "2024-11-05");
// i made user1 as a key in the WeakMap userSessions with the session information "2024-11-01" as the value.
//and i did the same for user2

// Print session expiration date for a specific user
console.log(userSessions.get(user1)); 
console.log(userSessions.get(user2)); 
//i printed the session expiration date associated with user1 and user2 in the userSessions WeakMap.

//Set one of the user objects to `null` 
//and demonstrate that it can be garbage collected by checking the `WeakMap`.

// Set user1 to null to remove references to it
user1 = null; 
//i removed the reference to the user1 object by setting it to null. Since WeakMap only holds weak references, 
//this means user1 is now eligible for garbage collection. The garbage collector will remove user1 and 
//its associated data from the WeakMap automatically, since theres no remaining references to user1 elsewhere in the code.


// Demonstrate that WeakMap does not hold onto the reference
console.log(userSessions.get(user1)); 
console.log(userSessions.get(user2)); 
//After i set user1 to null, if we try retrieve its session data from userSessions it will return undefined 
//because the garbage collector will eventually clear the entry.
//user2 will still return "2024-11-05" since it is still referenced and still in the WeakMap.



  












