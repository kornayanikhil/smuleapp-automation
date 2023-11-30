const fees = require('../pageobjects/feed.page')
const login = require('../utility/login')

describe("feed block", () =>{
    before(async () => {
        await login()
    })

    it("feed button visible", async() =>{
        expect(feed.feedButton).toBeDisplayed()
    })

    it("feed button clickable", async () => {
        expect(feed.feedButton).toBeClickable()
    })

    it("feed button gets clicked and move feed page ", async () => {
        await feed.feedButton.click();
        expect(await feed.feedTitle).toBeDisplayed();
    })

    it('should be able to  go to the  invite friend', async()=>{
        await feedPage.startButton.click();
        await expect(feedPage.invitefriend).toBeDisplayed(); 
        await feedPage.returnButton.click();
    })

    it('should be able to scroll ', async () => {
        await feed.feedScrollable;
    })
})