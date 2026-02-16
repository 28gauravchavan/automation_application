const {test,expect}=require('@playwright/test')


test("broken link",async({page})=>{

    //await page.goto("https://practice-automation.com/broken-links/");
    await page.goto("http://www.deadlinkcity.com/")
    const links=page.locator("//a");
let totalLinks=await links.count()
let checkedLinks=0
let brokenLinks=0
let validLinks=0
let failedLinks=0
for(let i=0;i<await links.count();i++)
{
    const url=await links.nth(i).getAttribute("href")
   
    const absoluteUrl = url.startsWith('http') ? url : new URL(url, page.url()).toString()
    try{
        const response = await page.request.get(absoluteUrl)
        const status = response.status()
        checkedLinks++
        if(status >= 400){
            console.log('broken link ->', absoluteUrl, status)
            brokenLinks++
        }else{
            console.log('ok ->', absoluteUrl, status)
            validLinks++
        }
    }catch(err){
        console.log('request failed for', absoluteUrl, '-', err.message)
        failedLinks++
    }
}

console.log('total links:', totalLinks)
console.log('checked links:', checkedLinks)
console.log('broken links:', brokenLinks)
console.log('valid links:', validLinks)
console.log('failed links:', failedLinks)

})