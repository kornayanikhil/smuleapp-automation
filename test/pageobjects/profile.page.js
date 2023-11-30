class profile{
    get profileButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]')
    }

    get userIDText() {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_username"]')
    }

    get editProfile() {
        return $('//*[@resource-id="com.smule.singandroid:id/btn_edit_profile"]')
    }

    get saveButton() {
        return $('//*[@text="Save"]')
    }

    get bioText() {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_profile_blurb"]')
    }

    get channelButton() {
        return $('//*[@text="Channel"]')
    }

    get invitesButtno() {
        return $('//*[@text="Invites"]')
    }

    get playlistBtn() {
        return $('//*[@text="Playlists"]')
    }

    get profilePicText() {
        return $('//*[@text="Profile Picture"]');
    }

    get menuButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/btn_menu"]')
    }

    get aboutButton (){
        return $('//*[@text="About"]')
    }

    get aboutContainingText() {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_section_empty"]')
    }
}
module.exports=new profile()