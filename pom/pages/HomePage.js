import { Selector } from "testcafe";

class HomePage {
    constructor(){
        this.loginButton = Selector("a").withText("Log in");
    }

    async clickOnLoginButton(){
        try{
        await t.click(loginButton)
        }
        catch(error) {
        await t.expect(false).ok('No se pudo hacer click en el boton login')
        }
    }
}

export default new HomePage();