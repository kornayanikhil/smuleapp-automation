const login = require('../utility/login');
const profile = require('../pageobjects/page.profile');
describe("profile",()=>
{  
    let text="hi this is harshit";
    before(async()=>
    {   
        await login();
    })
    it("navigate to profile page",async()=> {
        await driver.pause(5000)
        await profile.profileButton.click();
        await profile.profileButton.click();
        await driver.pause(5000)
        const userIDText=await profile.userIDText.getText();
        expect(userIDText).toBe("nikhilk");
        await driver.pause(3000);
    })

    it("edit profile button exists and information should be edited",async()=>
    {
        let editProfile=await profile.editProfile ;
        await editProfile.click();
        expect (await profile.profilePicText).toBeExisting();
    })

    it("4. bio text should be updated in the profile section",async()=>
    {
        const bioText=await profile.bioText.getText();
        await expect (bioText ).toBe(text);
    })

    it("5.Channel section should be clickable",async()=>
    {
        await profile.channelBtn.click();
        expect (await profile.channelContainText).toBeExisting();
    })

    it("Playlist section should be clickable",async()=>
    {
        await profile.playlistBtn.click();
        expect (await profile.playlistContainingText).toBeExisting();
    })
    
    it("should be able to enter in the about section", async () => {
        
        await profilePage.aboutButton.click();
        let abouttext = await profilePage.checktext.getText();
        await expect(abouttext).toEqual("Favourite Songs");
    })
})