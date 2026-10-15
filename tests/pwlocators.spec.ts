// Locators - it is used to locate the web elements 
/* DOM - Document Object Model
    Dom is a kind of API works witha a Backend provided by the browser 
    or
    DOM is a API Interface provided by the browser 
*/
/**
    1) page.getByAltText() to locate an element, usually image, by its text alternative.
    2) page.getByText() to locate by text content. (Non interactive elements)
    3) page.getByRole() to locate by explicit and implicit accessibility attributes.
    4) page.getByLabel() to locate a form control by associated label's text.
    5) page.getByPlaceholder() to locate an input by placeholder.
    6) page.getByTitle() to locate an element by its title attribute.
    7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configur
 */
import {test , expect, Locator} from "@playwright/test"

// creating test 
test("verify playwright locators",async({page})=>{
    //step1 - to run the url we go with page fixture and the method goto 
    await page.goto("https://inkocentre.org/", {
        waitUntil: "commit"
    });
    //Locators - Built In Methods 
    // 1. page.getByAltText() - This identifies image or simillar elements based on the alt attribute
    // when we can use this locators like when the element contains alt attribute such as image and area elements 
    // getByAltText() - here AltText() refers the attribute of an element. 
    /* How to find the ALT text - go to website select the inspect element option and  u can see the HTML tags 
       which is called DOM in that find the element which contain alt attribute u can see most of img tag contians
       this alt attribute u can copy the text and paste in this method 
    */
    const logo:Locator = page.getByAltText("Hangeul Day img") //this method will return a Locator (web element )
    // Hint - in playwright Locator is also a fixture like page, browser etc.,
    //after getting the element now we have to perform some operation so we have to store this into a variable 
    // in this Locator method it returns a Locator fixture so we have to specify the type of the variable 
    /**
     * await page.getByAltText("nopCommerce demo store") here if u try to hover the mouse on this method await ucan
     * see it shows there is no effect on this expression because this method does not return any promises, it returns 
     * a Locator and also we does not perform any changes on that particular element as of now we just get the element 
     * so there is no need to put await 
      For simple explanation where we have to use await 
      1.if the statement is returning a promise then we have to use await 
      2.If the statement is doing some action on the element  then we have to use await  

    */
    // we can also click the image 
    // once creating the variable which locates the image now we are going to do one assertion like verifying whether the image is vissible or not 
    //continue from line 21 now we are doing an assertion 
    await expect(logo).toBeVisible(); //here why we using await because this assertion will return something like we performing some changes so we use await
    
    /**
     * 2) page.getByText(); - this method is used to locate simple text,it can match by substring, exact string,
     * located by visible text 
     * this can be located for non intercative elements like p, div, span,etc
     * if u want to locate for interactive elements like input, button, a etc.  then u can go for role locators u can see it later 
    */
    let text:Locator =  page.getByText("E-learning")
    //above line we get the text using locator method now we are going to perform an operation using assertion
    await expect(text).toBeVisible()
    //it check weather the expected result match the actual result expected result is text matches or not 

    //u can also directly do this locator method inside the assertion 
    // await expect(page.getByText("Welcome to our store")).toBeVisible()

    /**
     * Hint: we can run the test in headed and headless mode 
       Headless = browser is running but you don't see it. - normal we can run in terminal
       Headed = browser window is visible while the test runs. - npx playwright test file_name --headed 
    */
    // await expect(page.getByText(/E\s+-\s+Learning/i)).toBeVisible(); // regular expression
    /**
     * 3) getByRole()- if your elements are Interactive then we go for getByRole
        like Buttons, links, Chexkbox, radio buttons, Input field 
        - here Role() is not represent as an attribute of an element 
        Implicit - means the tag name and role is exactly the same 

        example:
        HTML- 
        <h3> Sign Up </h3>
        <label>
            <input type ="checkbox" /> Subscribe
        </label>
        <br>
        <button> Submit </button>

        Ts:
        await expect(page.getByRole("heading", {name: "Sign up"})).toBeVisible(); - Explicit 
        await page.getByRole("checkbox", {name: "subscribe"})).check(); - Explicit 
        await page.getByRole("button",{name: /submit/i}).click(); - Implicit because the role and the tag name is same 

        Simple Defenition- when the locators needs to find an element using by their role 
        for example
        HTML:
        <button>Login</button>
        in TS
        page.getByRole("button",{name:"Login"})
                         ^               ^
                name of the Role      accsible name 
        means Find the element button whose accissible name is Login 

        For more reference of knowing about the role go to playwrigt_notes_img_reference and check
    */
   //getByRole
   await page.getByRole("link",{name : 'About'}).click();
   await expect(page.getByRole("heading",{name : 'About'})).toBeVisible(); // we can also use getByText()
   
   /**
     Code Explanation 
     await page.getByRole("link",{name : 'About'}).click(); here why we use await because 
     though the page.getByRole("link",{name : 'About'}) is not return promise but .click() action is 
     return a promise thats why we use await
     once i use a locator to find an element and also perform some action after that i use one assertion (validation)
     that the text is available in that page or not 
     await expect(page.getByRole("heading",{name : 'About'})).toBeVisible();
   */
    //3. getByLable() - it is used to locate form controls by lable text 
    // it is same like getbyPlaceholder() but instead of writing placeholder name we can use lable name 

    //4. getByPlaceholder() - it is used to locate an input by place holder 
    //best for having this locator with input without a lable but having a placeholder 
    await page.getByRole("link",{name : 'Contact'}).first().click()
    await page.getByPlaceholder("Name").fill("Niresh");
    await page.getByPlaceholder("E-mail").fill("test@gmail.com");
    await page.getByPlaceholder("Mobile Number").fill("7010838339");

    //getByTitle()- this locator is used to find the element has having attribute as title 
    //when to use - when ur element has a meaningful title attribute. 

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page.getByTitle("Home page link")).toHaveText("Home")
    let linka : Locator = page.getByTitle("HyperText Markup Language");
    await expect(linka).toHaveText("HTML");
    await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip")
})  
