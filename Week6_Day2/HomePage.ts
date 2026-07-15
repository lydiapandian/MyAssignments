import { WelcomePage } from "./WelcomePage";

export class HomePage extends WelcomePage{
    
    async ClickAccounts(){
     await this.Gpage.locator('//a[text()="Accounts"]').click()
    }
}