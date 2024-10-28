import { Selector, t } from "testcafe";

class LoginPage {
    constructor(){
        this.email= Selector('#user_email')
        this.password= Selector('#user_password')
        this.signInButton= Selector("input[value='Sign in']")
        this.message = Selector('.alert.alert-alert')
    }

    async Login(email, password){
        await t.expect(this.email.exists).ok('El campo de email no existe');
        await t.typeText(this.email,email)
        
        await t.expect(this.password.exists).ok('El campo de password no existe');
        await t.typeText(this.password,password)
        
        await t.expect(this.signInButton.exists).ok('El botón de Sign In no existe');       
        await t.click(this.signInButton)
        //await t.wait(3000)

               
    }
}

export default new LoginPage();