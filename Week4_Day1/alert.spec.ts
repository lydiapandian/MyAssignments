import test from "@playwright/test"

test("dialog",async({page})=>{
await page.goto("https://www.leafground.com/alert.xhtml");
page.on("dialog",async(alert)=>{
await alert.accept()
await alert.dismiss()
})

})
