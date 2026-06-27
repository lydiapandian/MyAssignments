import  {test,expect} from "@playwright/test"

test('leatapp', async ({page}) => {
await page.goto("https://login.salesforce.com/");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#password').fill('TestLeaf@2025')
await page.locator('#Login').click()
await page.locator('//div[@aria-label="App"]').click()
await page.locator('//button[text()="View All"]').click()
await page.locator('//p[text()="Sales"]').click()
await page.locator('(//span[@class="slds-truncate"])[4]').click()
await page.locator('//div[@title="New"]').click()
await page.locator('//button[@aria-label="Salutation"]').click()
await page.locator('//span[text()="Ms."]').click();
await page.locator('//input[@placeholder="Last Name"]').fill("pandian")
await page.locator('//input[@name="Company"]').fill("TestLeaf")
await page.locator('//button[@name="SaveEdit"]').click()
await expect(page.getByText('Ms. pandian')).toBeVisible();
    })