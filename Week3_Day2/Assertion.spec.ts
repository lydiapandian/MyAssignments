import test, { expect } from "@playwright/test"

test("Assertion",async({page})=>{
await page.goto("https://leafground.com/input.xhtml");
await expect(page.getByPlaceholder("Disabled")).toBeDisabled()
await expect(page.getByRole('textbox', {name:"Babu Manickam",exact:true})).toBeEditable()
await expect.soft(page.locator(`//label[text()="Username"]`)).toBeDisabled()
expect(page.locator('//input[@value="My learning is superb so far."]').fill("High Recommended Course"))
})
