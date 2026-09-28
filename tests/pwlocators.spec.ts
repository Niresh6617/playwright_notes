// Locators - it is used to locate the web elements 
/* DOM - Document Object Model
    Dom is a kind of API works witha a Backend provided by the browser 
    or
    DOM is a API Interface provided by the browser 
*/
import {test , expect, Locator} from "@playwright/test"

// creating test 
test("verify playwright locators",async({page})=>{
    //step1 - to run the url we go with page fixture and the method goto 
    await page.goto("https://demo.nopcommerce.com/")
    //Locators - Built In Methods 
    // page.getByAltText() - This identifies image or simillar elements based on the alt attribute
    // when we can use this locators like when the element contains alt attribute such as image and area elements 
    
    /* How to fing the ALT text - go to website inspect and in the element section u can see the HTML tags 
       which is called DOM in that find the element which contain alt attribute u can see most of img tag contians
       this alt attribute u can copy the text and paste in this method 
    
    */
    const logo:Locator =await page.getByAltText("nopCommerce demo store") //this method will return a locator (web element )
    // Hint - in playwright Locator is also a fixture 
    //after getting the element now we have to perform some operation so we have to store this into avariable 
    //where as this return a Locator fixture we have to specify the type of the variable 
    /**
     * await page.getByAltText("nopCommerce demo store") here if u try to hover the mouse on this method await ucan
     * see this await has no effect on this expression because this method does not return any promises it returns 
     * a Locator and also we does not perform any changes on that particular elment as of now we just get the element 
     * so there is no need to put await 
      For simple explanation where we have to use await 
      1.if the statement is returning a promise then we have to use await 
      2.If the statement is doing some action on the element  then we have to use await  

     */


})  