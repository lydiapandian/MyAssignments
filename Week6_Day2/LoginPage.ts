import { chromium, Page } from "@playwright/test";

export class LoginPage{
    Gpage:Page //global properties where type is page interface

    constructor(Lpage:Page){ //parameterized constructor which can assign local variable to global variable
    this.Gpage=Lpage 
    }
    async LoadURL(url:string) {
        await this.Gpage.goto(url)
    }
    async Entercredentials(username:string,password:string) {
        await this.Gpage.locator('#username').fill(username)
        await this.Gpage.locator('#password').fill(password)
    }
      async clickonlogin() {
        await this.Gpage.locator('.decorativeSubmit').click()
    }
      async closebrowser() {
        await this.Gpage.close()
    }
}

// async function dologin(){
//  const browser = await chromium.launch({headless:true})
//  const context = await browser.newContext()
//  const page = await browser.newPage()

//  let lp = new LoginPage(page)
//  await lp.LoadURL('https://leaftaps.com/opentaps/control/main')
//  await lp.Entercredentials("DemoSalesManager","crmsfa")
//  await lp.clickonlogin()
//  await lp.closebrowser()
//  console.log('success')
// }

// dologin()