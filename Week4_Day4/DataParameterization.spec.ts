import test from "@playwright/test"

//import
import {parse} from "csv-parse/sync" 
import fs from 'fs'
import path from 'path'

let value:any[] = parse(fs.readFileSync(path.join(__dirname,'../../Data/login.csv')),{columns:true,skip_empty_lines:true})

//single run
test("csv",async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.getByRole('textbox',{name:"Username"}).fill(value[0].username);
await page.getByText('Password').fill(value[0].password);
await page.locator('.decorativeSubmit').click();
await page.locator(`text='CRM/SFA'`).click();
await page.getByRole('link',{name:"Leads",exact:true}).click()
await page.getByRole('link',{name:"Create Lead",exact:true}).click()
let value1:any[] = parse(fs.readFileSync(path.join(__dirname,'../../Data/dropdownvalue.csv')),{columns:true,skip_empty_lines:true})
await page.locator('#createLeadForm_companyName').fill(value1[0].Companyname);
await page.locator('input[class=inputBox]').nth(2).fill(value1[0].Firstname);
await page.locator('input[class=inputBox]').nth(3).fill(value1[0].Lastname);
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

csv file
1.login.csv
testcaseid,username,password
1,demoSalesManager,crmsfa
2,demoCSR,crmsfa

2.dropdownvalue.csv
Companyname,Firstname,Lastname
TestLeaf Education,Lydia,Pandian
