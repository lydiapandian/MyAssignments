import {test,expect} from "@playwright/test"

test('Created Individuals', async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#password').fill('TestLeaf@2025')
await page.locator('#Login').click()
await page.locator('//div[@aria-label="App"]').click()
await page.waitForTimeout(3000); 
await page.locator('//button[text()="View All"]').click()
await page.locator('//p[text()="Individuals"]').click()
await page.locator('(//span[text()="Individuals List"])').click()
await page.locator('//span[text()="New Individual"]').last().click()
await page.locator('//input[@placeholder="Last Name"]').fill("pandian")
await page.locator('//span[text()="Save"]').click()
await page.waitForTimeout(3000); 
await expect(page.locator(`//div[@data-aura-class="forceToastMessage"]`)).toContainText("created")

})