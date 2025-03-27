/*
 * @Author: zhong@sealan.tech
 * @Date: 2021-08-25 20:06:28
 * @LastEditor: zhong@sealan.tech
 * @LastEditTime: 2021-08-25 20:07:11
 * @Description: Do not edit
 */
$(function() {
    if (navigator.language.indexOf("en") == 0 && window.location.pathname == "/") {
        window.location.href = "/en";
    } else  if(navigator.language.indexOf("zh") != 0) {
        $("#callto").hide();
    }
});
