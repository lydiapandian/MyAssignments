import { AccountPage } from "./AccountPage";

export class CreateAccountPage extends AccountPage{
    async fillmandatoryfield(){
        await this.Gpage.locator('#accountName').fill("lydia")
    }
    async clickcreateaccount(){
    await this.Gpage.locator('.smallSubmit').click()
    }
}