import  {test,expect} from "@playwright/test"

test('leatapp', async ({page}) => {
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator('#username').fill('demoCSR2');
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator(`text='CRM/SFA'`).click()
const title = await page.title()
const url = page.url()
console.log(`Leaftaps Title: ${title}`)
console.log(`Leaftaps Url: ${url}`)
await expect(page).toHaveTitle('My Home | opentaps CRM')
await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main')
})