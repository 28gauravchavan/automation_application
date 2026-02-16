const {test,expect}=require('@playwright/test')


test("broken link",async({page})=>{

    //await page.goto("https://practice-automation.com/broken-links/");
    await page.goto("http://www.deadlinkcity.com/")
    const links=page.locator("//a");
let totalLinks=await links.count()
})