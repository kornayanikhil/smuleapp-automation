const login = require('../utility/login');
const songbook = require('../pageobjects/page.songbook');


describe("songbook feature", () => {
    before(async () => {
        await login();
    })
    
    it('click on solo', async () => {
        await songbook.freeButton.click();
        await songbook.freeButton.click();
        await songbook.selectSong.click();
        await driver.pause(5000)

        expect(await songbook.soloButton).toBeExisting();
        await songbook.soloButton.click();
        await driver.pause(5000);
        await songbook.closeButton.click();
        await driver.pause(3000);

    })

    it('click on Duet ', async () => {
        await songbook.duetBtn.click();
        await songbook.duetBtn.click();
        await driver.pause(5000);
        await songbook.clickOnText.click();
        expect(await songbook.songButtonvisible).toBeExisting();
        await songbook.closeBtn.click();
        await songbook.backBtn.click();
        await songbook.backBtn.click();
        await driver.pause(3000)
    })
    
    it('click on join', async () => {
        await songbook.joinButton.click();
        await songbook.joinButton.click();
        await driver.pause(5000);
        await songbook.scroll;
        await songbook.backButton.click();
        await songbook.backButton.click();
        await driver.pause(3000);
        expect(await songbook.songbookText).toBeExisting();
    })

    it('should be able to select audio mode and reach to start sing  ',async()=>{
        await songbookPage.audioButton.click();
        await expect(songbookPage.start).toBeDisplayed();
    })
})