import test from "@playwright/test"

test("Create lead using playwrightlocator",async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.getByRole('textbox',{name:"Username"}).fill('demoCSR2');
await page.getByText('Password').fill('crmsfa');
await page.getByRole('button',{name:"Login",exact:true}).click()
await page.getByRole('link',{name:"CRM/SFA",exact:true}).click()
await page.getByRole('link',{name:"Leads",exact:true}).click()
await page.getByRole('link',{name:"Create Lead",exact:true}).click()
await page.locator('#createLeadForm_companyName').fill('TestLeaf Education');
await page.locator('input[class=inputBox]').nth(2).fill('Lydia');
await page.locator('input[class=inputBox]').nth(3).fill('Pandian');
await page.locator('input[name="personalTitle"]').fill('Ms');
await page.getByRole('textbox',{exact:true}).nth(10).fill('Senior QA Automation Engineer')
await page.getByRole('textbox',{exact:true}).nth(12).fill('16LPA')
await page.getByRole('textbox',{exact:true}).nth(11).fill('Software Testing')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('8428293880');
await page.getByRole('button',{name:"Create Lead",exact:true}).click()
})