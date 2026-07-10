import test from "@playwright/test"
import Login from "../../Data/DataParameter.json"

let data=Login[0]
test("json",async({page})=>{
await page.goto(data.URL);
await page.getByRole('textbox',{name:"Username"}).fill(data.Username);
await page.getByText('Password').fill(data.Password);
await page.locator('.decorativeSubmit').click();
await page.locator(`text='CRM/SFA'`).click();
await page.getByRole('link',{name:"Leads",exact:true}).click()
await page.getByRole('link',{name:"Create Lead",exact:true}).click()
await page.locator('#createLeadForm_companyName').fill(data.Companyname);
await page.locator('input[class=inputBox]').nth(2).fill(data.Firstname);
await page.locator('input[class=inputBox]').nth(3).fill(data.Lastname);
await page.locator('#createLeadForm_dataSourceId').selectOption({label:'Direct Mail'});
const marketingcampaign = page.locator('(//select[@id="createLeadForm_marketingCampaignId"])/option')
const countmarketingcampaign = await marketingcampaign.count()
console.log(`total count:${countmarketingcampaign}`)
await page.locator('#createLeadForm_marketingCampaignId').selectOption({value:'DEMO_MKTG_CAMP'});
await page.locator('#createLeadForm_industryEnumId').selectOption({index:6});
await page.locator('#createLeadForm_currencyUomId').selectOption({value:'INR'});
await page.locator('#createLeadForm_generalCountryGeoId').selectOption({label:'India'});
const state= page.locator('//select[@name="generalStateProvinceGeoId"]/option')
const statecount=await state.count()
console.log(`State count:${statecount}`)
await page.locator('//select[@name="generalStateProvinceGeoId"]').selectOption({index:1});
await page.locator('.smallSubmit').click()
})

helper file
DataParameter.json
[
{
"URL":"https://leaftaps.com/opentaps/control/main",
"Username":"demoSalesManager",
"Password": "crmsfa",
"Companyname":"TestLeaf Education",
"Firstname":"Lydia",
"Lastname":"Pandian"
}
]
