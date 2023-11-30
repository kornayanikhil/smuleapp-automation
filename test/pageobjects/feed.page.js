class feed {
    get feedButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]')
    }
    
    get inviteButton() {
        return $("~Invite Friends")
    }
    
    get messageBtn() {
        return $("~Messages")
    }

    get feedTitle() {
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]')
    }
    
    get followBtn() {
        return $('//*[@text="Follow"]')
    }

    get startButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/action_button"]')
    }

    get feedScrollable() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }
    
    get returnButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]')
    }
}
module.exports=new feed()