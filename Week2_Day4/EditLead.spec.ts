import  {test,expect} from "@playwright/test"

test('Editleatapp', async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator('#username').fill('demoCSR2');
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.locator(`text='CRM/SFA'`).click();
await page.locator(`text='Leads'`).click();
await expect(page.locator(`text='Create Lead'`)).toBeVisible();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator('#createLeadForm_companyName').nth(0).fill('TestLeaf');
await page.locator('input[class=inputBox]').nth(2).fill('Lydia');
await page.locator('input[class=inputBox]').nth(3).fill('Pandian');
await page.locator('.smallSubmit').click();
await page.locator(`//div[@class='frameSectionExtra']//a[3]`).click();
await page.locator('//input[@id="updateLeadForm_companyName"]').nth(0).fill('TestLeaf Education');
await page.locator('//input[@value="Update"]').click();

    })