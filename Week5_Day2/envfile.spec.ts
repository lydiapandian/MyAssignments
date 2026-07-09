import test from "@playwright/test";
import dotenv from 'dotenv'


//reading single file
dotenv.config({path:"Data/qa.env"})
test('Read Data from env file',async({page})=>{
console.log(process.env.E_URL);
console.log(process.env.E_Username);
console.log(process.env.E_Password);
})

let filename = process.env.envfile || 'qa' || 'dev' 
//fetching single env file from mutple env file under helper file
dotenv.config({path:`Data/${filename}.env`})
test.only('Read Data from env file',async({page})=>{
await page.goto(process.env.E_URL as string);
await page.locator('#username').fill(process.env.E_Username as string);
await page.locator('#password').fill(process.env.E_Password as string);
await page.locator('#Login').click()
})

//helper file
qa.env
E_URL=https://login.salesforce.com/?locale=in
E_Username=dilipkumar.rajendran@testleaf.com
E_Password=TestLeaf@2025

dev.env
E_URL=https://login.salesforce.com/?locale=in
E_Username=yuvarani.sekar@testleaf.com
E_Password=TestLeaf@2025
