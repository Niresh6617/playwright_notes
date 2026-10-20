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
    Example: //*[@ name = "search"] 
    hint: above example looks like html attributes but the slight changes is we have to start with //
    and * represents Regular Expression(Regex) if u dont know the tag name u can mention the * 
    after that u have to use @ symbol before the attribute name and followed by attribute value.

    hint: Always prefer use Relative Xpath because if we go with Absolute path we have to mention all the
    root element tags if their is any changes in the tag then it will give error so use relative path over 
    absolute 

*/