import test, { expect } from "@playwright/test"
import { waitForDebugger } from "inspector";
import path from 'path'

test("file upload",async({page})=>{

//launching the URL
await page.goto("https://www.leafground.com/file.xhtml");

//1) Using <input type="file">  
//The HTML tag name should be <input> and the attribute should be type="file".

let fileupload=page.locator('(//input[@type="file"])[2]')

//Relative path - As mutliple upload defining in an array 
await fileupload.setInputFiles(['Utils/qeagle.jpg','Utils/testleaf.png'])

//storing the innertext in the variable as a reference
let innertext1=await page.locator('(//div[@class="ui-fileupload-filename"])[1]').innerText()
console.log(innertext1)
let innertext2=await page.locator('(//div[@class="ui-fileupload-filename"])[2]').innerText()
console.log(innertext2)

//Soft assert if it does not match
expect.soft(innertext1).toBe('qeagleTest.jpg')

//Generic Assertions[non-retry]
expect(innertext1).toBe('qeagle.jpg')

//locator Assertions[Auto-Retry]
await expect(page.locator('(//div[@class="ui-fileupload-filename"])[2]')).toContainText("testleaf")

})

test.only("file upload using event listener",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload");

//2)using event listener
const fileChooserPromise = page.waitForEvent('filechooser');

//click element locator
page.locator('//div[@id="drag-drop-upload"]').click()

//resolve the promise
let fileuploadevent=await fileChooserPromise

console.log(path.join(__dirname))

//Absolute path
fileuploadevent.setFiles(path.join(__dirname,"/../../Utils/qeagle.jpg"))

//locator assertion
await expect(page.locator('//span[text()="qeagle.jpg"]')).toContainText('qeagle')

})
