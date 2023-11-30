class Songbook{
    
    get freeButton (){
        return  $ ('//*[@text="Free"]');
    }

    get feedButton  (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]')
    }

    get soloButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_solo_container"]')
    }

    get check (){
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]');
    }

    get closeButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/btn_close"]')
    }

    get duetButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_duet_container"]')
    }

    get clickOnText() {
        return $('//*[@text="I want to make up my own parts"]')
    }

    get backButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]')
    }

    get joinButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_join_container"]')
    }

    get songbookText() {
        return $('//*[@text="Songbook"]')
    }

    get audioButton (){
        return $('//*[@text="Audio"]');
    }

    get scroll() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    }
}

module.exports = new Songbook()