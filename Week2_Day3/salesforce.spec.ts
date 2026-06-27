import {test,expect} from "@playwright/test"

test('launch salesforce', async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#password').fill('TestLeaf@2025')
await page.locator('#Login').click()
const title = await page.title()
const url = page.url()
console.log(`Salesforce Title: ${title}`)
console.log(`Salesforce Url: ${url}`)
await expect(page).toHaveTitle('Lightning Experience')
await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
})


