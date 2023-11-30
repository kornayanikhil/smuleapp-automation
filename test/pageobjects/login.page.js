class Login {
    get uiScrollableButton() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")')
    }

    get languageButton() {
        return $('//*[@text="English"]')
    }

    get okButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/yesButton"]')
    }

    get language (){
        return $('//*[@text="English"]')
    }

    get signInButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/email_button_view"]')
    }

    get setValueEmailButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]')
    }

    get next() {
        return $('//*[@text="Next"]')
    }

    get passwdEnter() {
        return $('//*[@text="your password"]')
    }
}
module.exports = new Login()