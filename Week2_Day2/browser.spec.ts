import test, { chromium, webkit } from "@playwright/test"
test("launch RebBus",async () => {

    const browser=await chromium.launch({channel:"msedge",headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    const title = await page.title()
    const url= page.url()
    console.log(`Red Bus Title: ${title}`);
    console.log(`Red Bus URL: ${url}`);
})

test("launch Flipkart",async () => {

    const browser=await webkit.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com")
    const title = await page.title()
    const url= page.url()
    console.log(`Flipkart title: ${title}`)
    console.log(`Flipkart URL: ${url}`)

})
