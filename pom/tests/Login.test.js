import homePage from "../pages/HomePage";
import loginPage from "../pages/LoginPage";
import membersPage from "../pages/MembersPage";

import {CREDENTIALS,URLS, MESSAGES} from "../data/Constants";


fixture `Login tests`
    .page `${URLS.BASE_URL}`
    .beforeEach(async t => {
        await t.click(homePage.loginButton);
    });

test.meta('Smoke','Regression')('Login test', async t=>{
    await loginPage.Login(CREDENTIALS.VALID_CREDENTIALS.EMAIL,CREDENTIALS.VALID_CREDENTIALS.PASSWORD);
    await membersPage.waitForElement();
    await t.expect(t.eval(() => window.location.href)).eql(URLS.MEMBERS_URL, 'La URL no coincide con la URL esperada después del inicio de sesión.');

})

test.meta('Regression')('Invalid Email format', async t=>{
    await loginPage.Login(CREDENTIALS.INVALID_EMAIL_FORMAT.EMAIL,CREDENTIALS.INVALID_EMAIL_FORMAT.PASSWORD);
    await t.expect(t.eval(() => window.location.href)).eql(URLS.SIGNIN_URL, 'La URL no coincide con la URL esperada después del inicio de sesión.');
})

test.meta('Regression')('Invalid email', async t=>{
    await loginPage.Login(CREDENTIALS.INVALID_CREDENTIALS.EMAIL,CREDENTIALS.INVALID_CREDENTIALS.PASSWORD);
    await t.expect(loginPage.message.exists).ok('El mensaje de error no está presente.');
    await t.expect(loginPage.message.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_EMAIL_PASSWORD);
    await t.expect(t.eval(() => window.location.href)).eql(URLS.SIGNIN_URL, 'La URL no coincide con la URL esperada después del inicio de sesión.');
})