import { url } from "inspector"
import { title } from "process";

class LoginPage{

    Globalurl:string; //global property
    Title ='Testleaf';

    //assigning local variable to global
    constructor(localURL:string){
        console.log(`localurl is :${localURL}`)
        console.log(`global url: ${this.Globalurl=localURL}`)
    }
login(){
    console.log("login successfully")
}
logout(){
    console.log("login successfully")
}
}
const object = new LoginPage("https://platform.testleaf.com/#/");
object.login()
object.logout()
console.log(object.Title)
