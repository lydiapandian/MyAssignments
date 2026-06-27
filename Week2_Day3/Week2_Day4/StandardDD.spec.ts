import  {test,expect} from "@playwright/test"

test('leatapp', async ({page}) => {
await page.goto("https://www.leafground.com/select.xhtml");
const DDlist = page.locator('(//select[@class="ui-selectonemenu"])/option') //locating the drop down
const DDlistCount = await DDlist.count() //count of the drop down
console.log("List of Automation Tool")
for(let index=0;index<DDlistCount;index++){
   console.log(await DDlist.nth(index).innerText()) 
}
})
