import test, { expect } from "@playwright/test"

test("frames and alert",async({page})=>{
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
page.on('dialog',async(alert)=>{
let alertType=alert.type();
switch(alertType){
  case "confirm":
        await alert.accept()
        break
  default:
        await alert.dismiss()
}
})
const framereference=page.frameLocator('#iframeResult')
await framereference.locator('//button[text()="Try it"]').click()
const innertextbeforeclick=await page.frameLocator('#iframeResult').locator('#demo').innerText()
console.log(innertextbeforeclick)


})

