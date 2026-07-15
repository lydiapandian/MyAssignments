import { HomePage } from "./HomePage";

export class AccountPage extends HomePage{
     async ClickCreateAccount(){
    await this.Gpage.locator('//a[text()="Create Account"]').click()
    }
}