import test, { expect, Locator } from "@playwright/test";

test("verifying the page using locators",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html",{ waitUntil: "commit" })
    
    //1.getByAltText()
    let alttext : Locator = page.getByAltText("logo image");
    await expect(alttext).toBeVisible()

    //2.getByText()
    await expect(page.getByText("Locate elements by their text content.")).toBeVisible()
    await expect(page.getByText(/colored/)).toHaveText("colored text")

    //3.getByRole()
    await expect(page.getByRole("button",{name:"Primary Action"})).toBeVisible();
    await expect(page.getByRole("button",{name:/toggle button/i})).toBeVisible();

    //4.getByLable()
    const lableText : Locator = page.getByLabel("Email Address:");
    await expect(lableText).toBeVisible();
    await expect(lableText).toBeEnabled();
    await expect(lableText).toBeEditable(); 
    
    await lableText.fill("Niresh");
    await expect(lableText).toHaveValue("Niresh");

    //getByRole 
    await expect(page.getByRole("radio",{name: "Standard"})).toBeVisible();

    //5.getByPlaceholder()
    await expect(page.getByPlaceholder("Enter your full name")).toBeVisible()
    let placeholder_txt :Locator = page.getByPlaceholder("Type your message here...") ; 
    await placeholder_txt.fill("Hello");
    await expect(placeholder_txt).toHaveValue(/hello/i);
    

    //6.getByTitle()
    await expect(page.getByTitle("Home page link")).toHaveText("Home");

    

})