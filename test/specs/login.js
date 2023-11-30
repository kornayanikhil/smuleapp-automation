const login = require('../pageobjects/login.page')
const credentialsfilePath = require('../../credentials.json')

describe("login", () => {
    it("should select language and go to login", async () => {
        await driver.pause(5000);
        await login.uiScrollableButton;
        language = await login.languageButton;
        await language.click();
        let okbutton = await login.okButton;
        await okbutton.click();
    })


    it("email should invalid and next button should disable", async () => {
        await login.signInButton.click();
        await login.setValueEmailButton.setValue('nikhilk');
        expect(await login.nextButton).not.toBeClickable();
    })

    it("click on sign with email and get login", async () => {
        await login.setValueEmailBtn.setValue(credendtialsfilePath.username);
        await login.nextButton.click();
        await login.passwdEnter.addValue(credendtialsfilePath.password);
        await login.nextButton.click();

        await driver.pause(5000)

    })
})