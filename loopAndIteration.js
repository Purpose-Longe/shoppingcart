//Write a function `compareScores` that takes two inputs and checks their equality using ==, ===, and Object.is.

//Instructions: Log a message for each comparison showing whether the two inputs are equal or not, 
//using both loose and strict equality checks.

const compareScores = (a, b) => {
    if(a == b){
        console.log("it is equal based on loose equality");
    }else{
        console.log("it is not equal based on loose equality");
    }
    if(a === b){
        console.log("it is equal based on strict equality");
    }else{
        console.log("it is not equal based on strict equality");
    }
    if(Object.is(a, b)){
        console.log("it is equal based on Object.is");
    }else{
        console.log("it is not equal based on Object.is");
    }
}
compareScores(1, 1);

//Create an array `scores` representing student scores, e.g., [72, 85, 93, 64, 78].

//Instructions: Use a `for` loop to iterate over `scores` and print each student's score: `"Score: 72"`.
//Calculate and log the sum of all scores at the end.

let sum = 0;
const  scores = [72, 45, 93, 44, 78];
for(let i = 0; i < scores.length; i++){
    console.log(`Score: ${scores[i]}`);
    sum += scores[i];
}
console.log(`The sum of all scores is ${sum}`);

//Assume you need to ensure each score is a passing score (greater than or equal to 50). 
//Use a `while` loop to keep logging `"Score needs review"` until all scores are passing.

//Instructions: After each log, manually change a score in `scores` to a passing score until all scores meet the condition.
let i = 0;
while ( i < scores.length) {
    if (scores[i] < 50) {
        console.log(`Score index ${[i]} needs review`);
        break;
    }
    i++;
    if (i === scores.length) {
        console.log("All scores are passing.");
    }
}

//Use a `do...while` loop to ensure there’s at least one score in the `scores` array. 
//If `scores` is empty, log `"No scores found. Please add scores."`

//Instructions: Log the message until at least one score is in the array.

let count=0;
do{
    if(scores.length === 0){
        console.log("No scores found. Please add scores.");
    }
    count++;
    if (count === 3) {
        scores.push(95);
    }
    if (scores.length > 0) {
        console.log("There are scores.");
    }
} while (scores.length === 0);

//Use `forEach` on `scores` to log each score with a format like `"Student score: 85"`.
  
//Add an item number in the format `"Student 1 score: 85"`, `"Student 2 score: 72"`, etc.

scores.forEach((score, index) => {
    console.log(`Student ${index + 1} score: ${score}`);
});

//Apply `map` on `scores` to create a new array `extraCreditScores` where each score is increased by 10 points.

//Instructions: Log `extraCreditScores` to show the updated scores.
const extraCreditScores = scores.map((score) => score + 10);
console.log(extraCreditScores);

// Use `filter` on `scores` to create a new array `highScores` that only includes scores greater than 80.

//Instructions: Log `highScores` to display the scores that meet this condition.
const highScores = scores.filter((score) => score > 80);
console.log(highScores);

//Use `reduce` on `scores` to calculate the average score.

//Instructions: Divide the total score by the number of scores to get the average, then log it as `"Average score: X"`.

const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
console.log(`Average score: ${averageScore}`);