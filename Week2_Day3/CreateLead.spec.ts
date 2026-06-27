import  {test,expect} from "@playwright/test"

test('leatapp', async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator('#username').fill('demoCSR2');
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.locator(`text='CRM/SFA'`).click();
await page.locator(`text='Leads'`).click();
await expect(page.locator(`text='Create Lead'`)).toBeVisible();
await page.locator(`text='Create Lead'`).click();
await page.locator('#createLeadForm_companyName').nth(0).fill('TestLeaf');
await page.locator('input[class=inputBox]').nth(2).fill('Lydia');
await page.locator('input[class=inputBox]').nth(3).fill('Pandian');
await page.locator('input[name="personalTitle"]').fill('Ms');
await page.locator('#createLeadForm_generalProfTitle').fill('Senior QA Automation Engineer');
await page.locator('#createLeadForm_annualRevenue').fill('16LPA');
await page.locator('input[class=inputBox]').nth(9).fill('Software Testing');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('8428293880');
await page.locator('.smallSubmit').click();
})
