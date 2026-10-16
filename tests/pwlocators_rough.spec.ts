import test, { expect, Locator } from "@playwright/test";

test("verifying the page using locators",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html",{ waitUntil: "commit" })
    
    //getByAltText()
    let alttext : Locator = page.getByAltText("logo image");
    await expect(alttext).toBeVisible()

    //getByText()
    await expect(page.getByText("Locate elements by their text content.")).toBeVisible()
    await expect(page.getByText(/colored/)).toHaveText("colored text")

    //getByRole()
    await expect(page.getByRole("button",{name:"Primary Action"})).toBeVisible();
    await expect(page.getByRole("button",{name:/toggle button/i})).toBeVisible();

    //getByLable()
    const lableText : Locator = page.getByLabel("Email Address:");
    await expect(lableText).toBeVisible();
    await expect(lableText);

})