import test from "@playwright/test";
import Login from "../../Data/leaftaps.json"

for(let value of Login){
test(`json${value.TestCaseID}`,async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator('#username').fill(value.Username);
await page.locator('#password').fill(value.Password);
await page.locator('#Login').click()
})
}
//let data=Login[0]
//test.only(`json${data.TestCaseID}`,async({page})=>{
//await page.goto("https://login.salesforce.com/?locale=in");
//await page.locator('#username').fill(data.Username);
//await page.locator('#password').fill(data.Password);
//await page.locator('#Login').click()
//})


helper file
leaftaps.json
[
{
"TestCaseID":"TC001",
"Username":"dilipkumar.rajendran@testleaf.com",
"Password": "Testleaf@2027"
},
{
"TestCaseID":"TC002",
"Username":"yuvarani.sekar@testleaf.com",
"Password": "Testleaf@2027"  
}
]
