import test, { expect } from "@playwright/test"
import path from 'path'
let username="lydia"
test("file upload using salesforce",async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#password').fill('TestLeaf@2025')
await page.locator('#Login').click()
await page.locator('//div[@aria-label="App"]').click()
await page.getByRole('combobox', {name:"Search apps and items..."}).fill("Accounts")
await page.locator('//b[text()="Accounts"]').click()
await page.locator('//div[@title="New"]').click()
await page.getByRole('textbox', {name:"Account Name"}).fill(username)
await page.getByRole('combobox', {name:"Type"}).click()
await page.locator('(//span[text()="Prospect"])[1]').click()
await page.getByRole('combobox', {name:"Industry"}).click()
await page.locator('(//span[text()="Banking"])[1]').click()
await page.waitForTimeout(1000)
await page.locator('//button[@name="SaveEdit"]').click()
await page.waitForTimeout(1000)
await expect(page.locator('//lightning-formatted-text[@slot="primaryField"]')).toContainText(username)
const fileChooserPromise = page.waitForEvent('filechooser');
page.locator('(//div[@title="Upload Files"])[3]').click()
const fileupload = await fileChooserPromise
fileupload.setFiles("Utils/qeagle.jpg")
await page.locator('//span[text()="Done"]').click()
await expect(page.locator('.uiAbstractList')).toBeVisible()
})
