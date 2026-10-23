/**
    Playwright priority to use Locators are 
    1.Playwright built-In Locators 
    2.CSS Locators 
    3.Xpath Locators - usually playwright is not recommand to use this but in selinium they will use 
*/ 
/* 
    xpath full form is XML path Language 
    Xpath is used to Navigate  elements and attribute in XML Documents
    or simply Xpath gives the direction to locate the elements in the HTML Document or webpage 
    
    For Interviewer ask - Xpath is a XML Path Document It is used to locate  element in an webpage by 
    navigating through  HTML document structure.    
*/

import test, { expect, Locator } from "@playwright/test";

/* 
    2 Tyepes of Xpath we have  - Absolute Xpath, Relative Xpath
    i) Absolute Xpath (Full Xpath) - It will navigate through each and every node from the root node 
    or 
    Absolute xpath is a Full path is used to find the element which navigates from root of the document 
    to the target element 
    It starts with ' / 'means root node.
    example: /html/head/body/div/p
    ii) Relative Xpath (partial Xpath) - it is much easier to find the element because it will directly 
    jumps to the element using attribute without starting from the root.
    It Sarts with // means it will search element from anywhere in the document.
    Example: //*[@ name = "search"] or // tag_name[@ name = "search"]
    hint: above example looks like html attributes but the slight changes is we have to start with //
    and * represents Regular Expression(Regex) if u dont know the tag name u can mention the * 
    after that u have to use @ symbol before the attribute name and followed by attribute value.

    hint: Always prefer use Relative Xpath because if we go with Absolute path we have to mention all the
    root element tags if their is any changes in the tag then it will give error so use relative path over 
    absolute 

    Ho to use xpath - first we have to install a chrom extension name SelectorsHub after installing that 
    click inspect option ctrl + Shift + i and then DOM elements will appear and then we can search tag element 
    using ctrl + f or simpley place the cursor on everywhere u want to select after that select SelectorsHub
    option in right side of the style section in that u can search the xpath using absolute xpath and 
    relative xpath 
    
    hint - we can also search multiple attributes in an same element 
    //tag_name (or) *[@ attr_name = "value"][@ attr_name = "value"]...

    we can use opertor in xpath also
    like that we can compare the two attribute using operatos 
    eg: tag_name[@ type = "submit" and @value ="search"]
    if both the attribute returns true   then only the element will be shown 

*/
test("verify xpath locators" , async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    // Absolute Xpath
    let Absolutelogo :Locator = page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(Absolutelogo).toBeVisible();

})