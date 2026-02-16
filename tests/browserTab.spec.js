const{test,expect}=require('@playwright/test');

test("switching between tabs",async({browser})=>{
    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const newtab=page.waitForEvent('popup')
    await page.locator("#opentab.class2").click()
    const newpage=await newtab
    await newpage.waitForLoadState()
    //console.log(await newpage.title())  // child tab title
    //console.log(await page.title())    // parent tab title
const pagecount=await context.pages().length
console.log(pagecount)

for(const page1 of context.pages()){
    if(page1.url().includes("rahulshettyacademy"))
{
console.log( page.url())
}else
{
 console.log( newpage.url())
}
   
}


    


})