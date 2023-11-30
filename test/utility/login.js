const login = require('../pageobjects/login.page')
const credentialsfilePath=require('../../credentials.json')

const login = async() =>{
    await driver.pause(7000)
    await login.uiScrollableBtn
    language = await login.languageBtn
    await language.click()
    let okButton = await login.okBtn
    await okButton.click()
    await login.signInBtn.click()
    await login.setvalueEmailBtn.setValue(credentialsfilePath.username)
    await login.nextBtn.click()
    await login.passwdBtn.addValue(credentialsfilePath.password)
    await login.nextBtn.click()
}

module.exports = login;