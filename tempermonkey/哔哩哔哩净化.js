// ==UserScript==
// @name         BiliBIli视频页面净化
// @namespace    https://sunrt233.top
// @version      0.1
// @description  净化哔哩哔哩视频页面的直播推广
// @author       SunRt233
// @match        https://www.bilibili.com/video/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&www.bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    window.addEventListener("load",() => {
        let targets = document.getElementsByClassName("pop-live-small-mode part-undefined");
        targets.forEach(e => e.style.visibility = "hidden");
        alert(targets.length);
    });
})();
