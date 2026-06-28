import test, { expect } from "@playwright/test"

test.use({
      storageState: 'Data/StorageState.JSON'
})
test("Skip",async({page})=>{
await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL922726478395")
})