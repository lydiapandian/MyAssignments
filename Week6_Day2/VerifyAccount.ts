import { CreateAccountPage } from "./CreateAccountPage";

export class verifyaccounts extends CreateAccountPage{
    async verifythecreatedaccounts(){
    let verifytheaccount = await this.Gpage.locator('(//span[@class="tabletext"])[3]').innerText()
    console.log(verifytheaccount)
    }}
