console.log("Hello World");



// ==============
// Nav Bar Setup
// ==============
const navPlaceHolder = document.getElementById('nav-place-holder')
const navBar = document.getElementById('gd-nav')
// Make navbar stick to top when it hits the top of page
document.onscroll = () => {
    navPlaceHolder.getBoundingClientRect().top<=0 ? navBar.classList.add('stick-top') : navBar.classList.remove('stick-top')
}
function toggleNavLinks() {
    var x = document.getElementById("responsive-nav");
    if (x.className === "") {
        x.className += "hidden";
    } else {
        x.className = "";
    }
}



// ==========================
// Projects Setup & Controls
// ==========================
let slideIndex = 0
const videoPlayer = document.getElementById("video-player")
const videoPositionIndicator = document.getElementById('video-position')
// Project List
const videoList = [
    "https://www.youtube.com/embed/Rsg16mxXjFM",
    "https://www.youtube.com/embed/lfPUkighE4c",
    "https://www.youtube.com/embed/yvMlBWNodFc",
    "https://www.youtube.com/embed/Mik6VvbaRIg",
    "https://www.youtube.com/embed/videoseries?list=PLb83HT8-4kJejyBsghr0JEzNxVqanS8be"
]
// Create dots for each Video
for (let i=0;i<videoList.length;i++) {
    dot = document.createElement('span')
    dot.classList.add('dot')
    if (i===0) dot.classList.add('active')
    videoPositionIndicator.appendChild(dot)
}
const changeVideo = (n) => {
    if (slideIndex+n >= videoList.length) {slideIndex = 0}
    else if (slideIndex+n < 0 ) {slideIndex = videoList.length -1}
    else {slideIndex += n}
    videoPlayer.src = videoList[slideIndex]
    for (let i=0;i<videoList.length;i++) {
        videoPositionIndicator.children[i].classList.remove('active')
    }
    videoPositionIndicator.children[slideIndex].classList.add('active')
}