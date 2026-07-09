import { url } from "inspector"
import { title } from "process";

class LoginPage{

    url:string; //global property
    Title ='Testleaf';

    //assigning local variable to global
    constructor(Url:string){
        console.log(`url is :${Url}`)
        this.url=Url
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
