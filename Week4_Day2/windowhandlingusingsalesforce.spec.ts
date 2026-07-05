import { test, expect } from '@playwright/test';

test('Merge Leads', async ({ page, context }) => {
await page.goto('http://leaftaps.com/opentaps/control/main');
await page.locator('#username').fill('DemoSalesManager');
await page.locator('#password').fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.getByText('CRM/SFA').click();
await page.locator(`text='Leads'`).click();
await page.locator(`//a[text()='Merge Leads']`).click();
const [FromLead] = await Promise.all([context.waitForEvent('page'),page.locator(`//img[@alt="Lookup"]`).nth(0).click()])
await FromLead.waitForLoadState();
await FromLead.locator('//div[contains(@class,"x-grid3-cell-inner")]/a').first().click();
const [ToLead] = await Promise.all([context.waitForEvent('page'),page.locator(`//img[@alt="Lookup"]`).nth(1).click()])
await ToLead.waitForLoadState();
await ToLead.locator("//div[contains(@class,'x-grid3-col-partyId')]//a").nth(1).click();page.on('dialog', async dialog => {
console.log(dialog.message());
console.log(dialog.type());
await dialog.accept();
});
await page.locator(`//a[text()="Merge"]`).click();
await expect(page).toHaveTitle(/View Lead/);
console.log("Page Title:", await page.title());
});