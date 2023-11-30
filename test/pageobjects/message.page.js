class Message {
    get messageButton() {
        return $('~Messages')
    }

    get feedButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }

    get searchEditText() {
        return $('//*[@resource-id="com.smule.singandroid:id/search_edit_text"]')
    }

    get textOnNextPage() {
        return $('//*[@text="Messages from people you follow"]')
    }

    get chatTitle() {
        return $('//*[@resource-id="com.smule.singandroid:id/chat_title"]')
    }

    get enterMessage(){
        return $('//*[@resource-id="com.smule.singandroid:id/inputBox"]')
    }

    get inputBox() {
        return $('//*[@resource-id="com.smule.singandroid:id/inputBox"]')
    }

    get sendButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/send_button"]')
    }

    get checkHomePage (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]')
    }
}
module.exports=new Message();