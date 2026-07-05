import test from "@playwright/test"
test("frameobject",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml");
const frameref=page.frame({url:"https://www.leafground.com/default.xhtml"})

const beforeinnertext= frameref?.locator('#Click').innerText
console.log(beforeinnertext)
await frameref?.locator('#Click').click()
const afterinnertext=await frameref?.locator('#Click').innerText()
console.log(afterinnertext)

const nestedframe=page.frame({name:"iframe2"})
await nestedframe?.locator("#Click").click()
})
