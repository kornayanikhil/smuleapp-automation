const login = require('../utility/login')
const message = require('../pageobjects/message.page')
describe("message", () => {

    before(async()=>
    {
        await login();
    })

    it('click on message', async () => {
        await message.messageButton.click();
        await message.messageButton.click();
        expect (await message.textOnNextPage).toBeDisplayed();
       
    })

    it('should be able to enter the message', async()=>{
        
        await messagesPage.messageButton.click();
        await driver.pause(3000); 
        await expect(messagesPage.checkmessage).toBeExisting();
    })

    it('should be able to do personal chat',async()=>{
       
        await messagesPage.enteryourmessage.setValue("hi");
        await messagesPage.sendButton.click();
        await expect(messagesPage.checktext).toBeDisplayed();

    })
})