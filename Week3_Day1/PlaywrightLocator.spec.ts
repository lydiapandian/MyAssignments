import test from "@playwright/test"

test("playwrightlocator",async({page})=>{
await page.goto("https://parabank.parasoft.com/parabank/index.htm");
await page.getByRole('link',{name:"Forgot login info?"}).click()
page.getByAltText('ParaBank').click()
await page.getByText('Locations',{exact:true}).nth(0).click()
await page.getByRole('button').nth(1).click()
await page.getByRole('button',{name:"Search",exact:true}).click()
await page.waitForTimeout(3000); 
await page.getByPlaceholder('Search Keywords',{exact:true}).fill("chennai")

})