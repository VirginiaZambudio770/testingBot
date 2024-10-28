import { Selector, t } from "testcafe";
import homePage from "../pages/HomePage";
import loginPage from "../pages/LoginPage";
import {CREDENTIALS,URLS} from "../data/Constants";


fixture `Login tests`
    .page `${URLS.BASE_URL}`
    .beforeEach(async t => {
        await t.click(homePage.loginButton);
    });

test.meta('Smoke')('Login test', async t=>{
    await loginPage.Login(CREDENTIALS.VALID_CREDENTIALS.EMAIL,CREDENTIALS.VALID_CREDENTIALS.PASSWORD);

})