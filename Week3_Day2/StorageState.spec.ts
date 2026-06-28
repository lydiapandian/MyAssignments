import test, { expect } from "@playwright/test"

test("StorageState",async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator('#username').fill('democsr2');
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.context().storageState({
    path: 'Data/StorageState.JSON'
})
await page.locator(`text='CRM/SFA'`).click();
await page.locator(`text='Leads'`).click();

})