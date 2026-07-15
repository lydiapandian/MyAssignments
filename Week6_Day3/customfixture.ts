import {test as BaseTest} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { WelcomePage } from "../Pages/WelcomePage";
import { HomePage } from "../Pages/HomePage";
import { AccountPage } from "../Pages/AccountPage";
import { CreateAccountPage } from "../Pages/CreateAccountPage";
import { verifyaccounts } from "../Pages/VerifyAccount";


type myFixture={
 loginfix:LoginPage
 welfix:WelcomePage
 homefix:HomePage
 accountpagefix:AccountPage
 createaccountfix:CreateAccountPage
 verifyaccountfix:verifyaccounts
}
export const test1 = BaseTest.extend<myFixture>({
loginfix:async({page},use)=>{
const lp = new LoginPage(page)
await use(lp)
},
welfix:async({page},use)=>{
const wp = new WelcomePage(page)
await use(wp)
},
homefix:async({page},use)=>{
const hp = new HomePage(page)
await use(hp)
},
accountpagefix:async({page},use)=>{
const ap = new AccountPage(page)
await use(ap)
},
createaccountfix:async({page},use)=>{
const Createap = new CreateAccountPage(page)
await use(Createap)
},
verifyaccountfix:async({page},use)=>{
const vp = new verifyaccounts(page)
await use(vp)
},
})

