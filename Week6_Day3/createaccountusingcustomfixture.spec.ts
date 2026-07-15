import { test1 } from "../Utils/customfixtue";
import dotenv from 'dotenv'

dotenv.config({path:"Data/leaftaps.env"})
test1('create account using custom fixture',async({verifyaccountfix})=>{

await verifyaccountfix.LoadURL(process.env.L_URL as string)
await verifyaccountfix.Entercredentials(process.env.L_Username as string,process.env.L_Password as string,)
await verifyaccountfix.clickonlogin()
await verifyaccountfix.clickonCRMSFA()
await verifyaccountfix.ClickAccounts()
await verifyaccountfix.ClickCreateAccount()
await verifyaccountfix.fillmandatoryfield()
await verifyaccountfix.clickcreateaccount()
await verifyaccountfix.verifythecreatedaccounts()
}
)