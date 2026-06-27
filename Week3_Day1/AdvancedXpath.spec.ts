import test from "@playwright/test"
test ("locator",async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator('//input[contains(@id,"username")]').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('//label[@class="label"]/following-sibling::input[@id="password"]').fill('TestLeaf@2025');
await page.locator('//input[starts-with(@id,"Login")]').click();
await page.waitForTimeout(3000); 
const title = await page.title()
console.log(`Salesforce Title: ${title}`);
const url = page.url();
console.log(`Salesforce URL: ${url}`);

})
