import test, { expect } from "@playwright/test"
import { fileURLToPath } from "node:url";
test("file download using event listener",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/download");

//using event listener
const fileDownloadPromise = page.waitForEvent('download');

//using playwright locator for download
await page.getByRole('link', {name:"background.jpg",exact:true}).click()

//resolve the promise
const filedownload= await fileDownloadPromise

//customize path
await filedownload.saveAs('Data/Test.png')

//suggested filename
await filedownload.saveAs(`Utils${filedownload.suggestedFilename()}`)

//Generic Assertions[non-retry]
expect (filedownload).toBeTruthy

//locator Assertions[Auto-Retry]
expect((filedownload.suggestedFilename)).toContain("test")
})
