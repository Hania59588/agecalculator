// CHAPTER : 1 , 2 , 3  //


  // Question # 01 //

// let firstname = "Hania"

//  Question # 02 //

// let lastname = "Haider"

//  Question # 03 //

// let age = "21"

//  Question # 04 //

// alert( "Hello" + " " + " I am " +  " " + firstname + "  " + lastname + " " + "I am " + " " + age + " " + "Year's Old")


//   CHAPTER : 4 , 5 , 6
 

//  Question # 1 //

// var a = 2

// var b = a++ + ++a - --a + a-- 

// alert ( a )

// alert ( b )



//  CHAPTER : 8 //

//  Question # 1 //

// let a = ( 6 * 4 ) + ( 3 * 3 ) 
// console.log ( a ) // 33

// // Question # 2 // 

// let b = 5 + 6  - ( 2 * 7)
// console.log ( b ) // -3

// // Question # 3 // 

// let c = 7 - 10 + 2 - ( 8 * 9 )
// console.log ( c ) // -73

// // Question # 4 // 

// let d = ( 2 * 9) - 11
// console.log ( d ) // 7
 
// // Question # 5 // 

// let e = 24 - 20 + 1 - ( 3 * 6 )
// console.log ( e ) // -13


// Chapter # 21 //

// let text = "hello world" 

// console.log(text.toUpperCase());

// console.log(text.toLowerCase());

// my name is hania haider //
// My name is Hania Haider //

// let titlecase = "my NAME is HANIA haider"


// split method is used to give u output in array //

// let mytitle = titlecase.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.splice(1).join(" "))

// console.log(mytitle);

const birthYearInput = document.getElementById('birth-year');
const currentYearInput = document.getElementById('current-year');
const resultParagraph = document.getElementById('result');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const birthYear = parseInt(birthYearInput.value);
    const currentYear = parseInt(currentYearInput.value);
    const age = currentYear - birthYear;
    resultParagraph.textContent = `You are ${age} years old.`;
});















