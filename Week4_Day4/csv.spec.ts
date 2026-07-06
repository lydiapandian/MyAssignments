import test from "@playwright/test"

//import
import {parse} from "csv-parse/sync" 
import fs from 'fs'
import path from 'path'

//absolute path and performing parse which is tranforming raw text strings or external files into jayascript object
let value:any[] = parse(fs.readFileSync(path.join(__dirname,'../../Data/login.csv')),{columns:true,skip_empty_lines:true})
console.log(value);
console.log(typeof value);

//data in login.csv
let data=fs.readFileSync('Data/login.csv','utf-8')
console.log(data);
console.log(typeof data);

//print the first row in csv file
console.log(value[0].testcaseid)
console.log(value[0].username)
console.log(value[0].password)

//single run
test("csv",async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.getByRole('textbox',{name:"Username"}).fill(value[0].username);
await page.getByText('Password').fill(value[0].password);
await page.getByRole('button',{name:"Login",exact:true}).click()
})

//multiple run
for(let cred of value)
test.only(`csv${cred.testcaseid}`,async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.getByRole('textbox',{name:"Username"}).fill(cred.username);
await page.getByText('Password').fill(cred.password);
await page.getByRole('button',{name:"Login",exact:true}).click()
})
