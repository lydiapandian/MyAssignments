import test, { chromium, firefox, webkit } from "playwright/test";

test('launch browser', async()=>{

    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(2000)
    console.log(await page.title());
    console.log(await page.url());
    
})
test('launchbrowser firefox', async()=>{

    const browser1 = await firefox.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    
    await page1.goto("https://www.flipkart.com/")
    await page1.waitForTimeout(2000)
    console.log(await page1.title());
        console.log(await page1.url());

})
