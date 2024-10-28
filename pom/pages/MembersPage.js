import { Selector, t } from "testcafe";

class MembersPage {
    constructor(){
        this.headingText = Selector("h2").withText("Your tests");
    }

    async waitForElement() {
        await t.expect(this.headingText.exists).ok({ timeout: 5000 }); // Espera hasta 5 segundos
    }
}

export default new MembersPage();