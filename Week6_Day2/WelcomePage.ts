import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{

    async clickonCRMSFA(){
    await this.Gpage.locator('#label').click()
    }
    async clickonLogout(){
        await this.Gpage.locator('.decorativeSubmit').click()
    }
}