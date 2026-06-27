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
await page.locator('//input[@name="Individual-search-input"]').fill("lastname")
await page.keyboard.press("Enter")
await page.waitForTimeout(3000); 
await page.locator('//table[@data-num-rows="1"]/tbody/tr/td[6]').click()
await page.locator(`text='Edit'`).click()
await page.locator('//span[text()="Salutation"]/parent::span/following-sibling::div').first().click()
await page.locator('[title="Mr."]').click();
await page.locator('//input[@placeholder="First Name"]').fill("lastname")
await page.locator('//span[text()="Save"]').click();
await expect(page.locator(`//span[@class="toastMessage slds-text-heading--small forceActionsText"]`)).toContainText("saved");


    })