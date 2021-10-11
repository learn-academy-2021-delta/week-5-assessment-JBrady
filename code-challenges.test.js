// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
// var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
// var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// ----- Problem Solving -----
// Create a describe method called leetTranslator
// Add a test method that describes what leetTranslator does
// Add an expect method that compares the input to the expected values

// ----- Syntax -----
// describe("leetTranslator", () => {
//     var secretCodeWord1 = "Lackadaisical"
//     var secretCodeWord2 = "Gobbledygook"
//     var secretCodeWord3 = "Eccentric"
//     it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//         expect(leetTranslator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(leetTranslator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(leetTranslator(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// Test fails with ReferenceError: leetTranslator is not defined

// b) Create the function that makes the test pass.

// ----- Problem Solving -----
// Create a function called leetTranslator that takes in a string as a parameter.
// Iterate through the string using the .replace() method which is an accessor (returns a new string).
// Create a variable called l33tH4x0rString to hold the value of the new string
// Use regular expression to pattern match the specific conversion requirements ('a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0)
// Should return the new value from l33tH4x0rString that's been converted from the original string into leet speak.
// Referencing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// ----- Syntax -----
// const leetTranslator = (string) => {
//     // Regex pattern matching begins with /.../
//     // Square brackets [] contain the upper and lowercase letters to match
//     // The g switch performs a global search and replace.
//     // The second parameter is the number that will replace the matched letter
//     let l33tH4x0rString = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0');
//     return l33tH4x0rString
// }

// Test passes

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// ----- Problem Solving -----
// Create a describe method called findCommonLetter
// Add a test method that describes what findCommonLetter does
// Add an expect method that compares the input to the expected values

// ----- Syntax -----
// describe("findCommonLetter", () => {
//     var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
//     var letterA = "a"
//     // Expected output: ["Apple", "Banana", "Orange"]
//     var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
//     var letterE = "e"
//     // Expected output: ["Cherry", "Blueberry", "Peach"]
//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
//         expect(findCommonLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
//         expect(findCommonLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// Test fails with ReferenceError: findCommonLetter is not defined

// b) Create the function that makes the test pass.

// ----- Problem Solving -----
// Create a function called findCommonLetter that takes in an array and a letter as a parameter.
// Create a variable called wordsContainingLetter to hold the new value 
// Use the higher-order function .filter() that will loop through the array and return a subset of the array with only values that are truthy.
// Use .include() method on the return value to find if the given variable letter is in the string
// and use the .uppercase() method to make sure capitalized words get found


// ----- Syntax -----
// const findCommonLetter = (array, letter) => {
//     return wordsContainingLetter = array.filter(value => {
//         // I have to include the .toUpperCase() method here, otherwise 'Apple' doesn't get found or returned
//         return value.includes(letter) || value.includes(letter.toUpperCase())
//     })
// }

// Test passes



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// ----- Problem Solving -----
// Create a describe method called findCommonLetter
// Add a test method that describes what findCommonLetter does
// Add an expect method that compares the input to the expected values

// ----- Syntax -----
describe("fullHouse", () => {
    var hand1 = [5, 5, 5, 3, 3]
    var hand2 = [5, 5, 3, 3, 4]
    var hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a full house (exactly one pair and one three of a kind)", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// Test fails with ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// ----- Problem Solving -----
// A full house is an array of 2 of the same number AND 3 of the same number.
// Iterate through the array to make sure there's no more than 2 of the same number.
// If there's more than 2 of the same number, then return false. Probably be using the .length() method.
// Create a function called fullHouse that takes in an array as a parameter.
// Create a variable that holds the new value of the array


// ----- Syntax -----
const fullHouse = (array) => {
    let countObj = {}
    for(let x of array){
      countObj[x] = (countObj[x] || 0) + 1;
    }

    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
}

// Test passes but this is an answer found on google and I'm not sure whats going on here.
// It looks like its creating an object as a variable (countObj). Not sure why they're doing that.
