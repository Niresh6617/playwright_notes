import {test,expect} from "@playwright/test";

test("verify the URL",async ({page})=>{
    await page.goto("https://www.google.com/")
    let URL = await page.url();
    //Assertion or validating the URL will be match with our expected result 
    await expect(page).toHaveURL(/google/);
})