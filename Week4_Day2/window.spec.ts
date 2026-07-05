import test from "@playwright/test"
test("window handling",async({page,context})=>{
await page.goto("https://www.leafground.com/window.xhtml");

const parent= context.waitForEvent('page')
await page.locator('//span[text()="Open"]').click()
const childwindow= await parent
await childwindow.locator('#email').fill("lydia@gmail.com")
childwindow.close()
await page.waitForTimeout(3000); 
page.bringToFront()
await page.locator('//span[text()="Open Multiple"]').click()

})
