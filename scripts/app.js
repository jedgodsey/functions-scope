console.log('I love you');

// ## 1. Verbal questions

// Answer 1: A parameter is an entity that defines the input that a function receives and will be passed in to the executed code block.  An argument is the information that is passed into a function as a parameter.

// Answer 2: A return is information produced by a function that can be used elsewhere within code.  A console log is exclusively information that is printed onto the developer console.  It cannot be harnessed by other code in your document.

// Answer 3: Because a function can return a value when it's run, the corresponding return can be used elsewhere within code or to initiate other processes.

// ## 2. Palindrome again.

let checkPalindrome = str => {
    let myArray = str.toUpperCase().split('');
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== myArray[myArray.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("Radar"));

// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.

let sumDigits = num => num.toString().split('').map(item => parseInt(item)).reduce((a,b) => a + b);
console.log(sumDigits(42));

// ## 4. Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

// _hint:_ discover the Pythagorean Theorem on a website called google.com

// _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

let calculateSide = (sideA, sideB) => Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
console.log(calculateSide(8, 6));

// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

let sumArray = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}


console.log(sumArray([1, 2, 3, 4, 5, 6]));

// "Commit 5 - Sum Array".
// <hr>

// ## 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.

// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 6 - Prime Numbers".
// <hr>


// ## CSS
// Watch the following three videos on CSS:

// - [First CSS video - 5 minutes](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Second CSS video - 11 minutes](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Third CSS video - 17 minutes](https://www.youtube.com/watch?v=g0Aq2kP5-CY&index=5&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

// You will need to have watched these videos for tomorrow's lab.

// # Hungry for more?

// 1. Complete the afternoon lab. 

// 2. Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.
// ```javascript
// console.log(insertDash(454793));

// => 4547-9-3
// ```

//     Commit.

// 3. Write a function `reverseString` that takes a string as a parameter and returns that string with the letters reversed **without using `.split()`, `.reverse()`, or `.join()`**.

//     Commit.

// 4. Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.

//     Commit.

// 5. Make your palindrome function work even if the string contains punctuation.  So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

//     Commit.

// 6. Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards.  It should not care about spacing, capitalization, or punctuation.  For example the following string would pass the test: 

//     "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

//     Commit.

// 7. You still want more?!?! Do you even sleep? Create an account on [Project euler](https://projecteuler.net/archives) and keep working on those problems.
