// Class - 1 
// TypeScript - is a superset of JavaScript

// npm - Node Package Manager
// npx - Node Package Executor 



// Create a Type Script file name as mytest.spec.ts

// Test , Expect  - Built in Function

// note: Playwright is a Module so we need to import the test and expect 

// • Test Function will be use to create a test cases 
// •  Expect Function will be used for Assertion or Validation to test 

// the first statement after creating the file is import the test and expect function from playwright Module

// Next we have to write a test case for that we using the test function in that test function 
// has acept two paramaters one is title of the test and another one is a function 
// wheather it could be a simple function, arrow function or annonymous function 
//Syntax to write test 
// test ("titile" , () =>{

// // step 1
// // step 2
// // step 3

// })

import {test,expect} from "@playwright/test" 

//Fixture - global variable : page, browser
//page.goto - goto is a method of page is used to launch URL in web page  
test("verify page title",({page})=>{
    // 1. to run the url we go with page fixture and the method goto 
    page.goto("https://testautomationpractice.blogspot.com/")
    //steps 1 to n
    // 3. we can also console and see the title of the webpage using a method in page called title 
    let title: string = page.title();
    // 2. to verify the title of the web page using expect function with some methods
    expect(page).toHaveTitle("My Shop")
})

/**
 * expect is a function which is used for assertion 
 Assertion is a validation step in playwright it checks whether the actual result 
 is matches the epxected results if the condition is true the test passes if the condition fails
 the test fails
**/
// note: Whenever we do create steps inside the test all the steps will return a promise

//* promise is nothing but a conformation or a gaurantee whether the task is completed or not  

// Asyncronous and Synchronous

// * Synchronous - It is a Step by step Execution 
// * Asynchronous - It will executes the steps parallely it wont wait for the previous steps
//  the main drawback of this Asynchronous is there is a Dependencies here
//  until unless the task 1 is completed cannot proceed the task2

// In Playwright 
// test ("titile" , () =>{

//     // step 1 => Task => returns promise => returns resolve,reject  
//    // step 2 => Task => returns promise => returns resolve,reject 
//   // step 3 => Task => returns promise => returns resolve,reject 

// })