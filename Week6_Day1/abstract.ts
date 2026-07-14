import { PageRules } from "./interface";

export abstract class BasePage{

    waitForPageLoad(){
        console.log("Waiting for page to load")
    }
    getPageTitle(){
        console.log("Getting Page Title")
    }
}

class LoginPage extends BasePage implements PageRules{
   verifyPage(){
        console.log("Login Page verified")
    }
   PageRules(){
        console.log("PageRules is verified")
    }
   enterusername(){
        console.log("Username Entered")
    }
   enterpassword(){
        console.log("Password Entered")
    }
   clickLogin(){
        console.log("Login Button Clicked")
    }
}

const object = new LoginPage()
object.waitForPageLoad()
object.verifyPage()
object.enterusername()
object.enterpassword()
object.clickLogin()
object.getPageTitle()
