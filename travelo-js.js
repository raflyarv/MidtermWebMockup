function searchToggle() {
    if (document.getElementById("search").style.display == "") {
        document.getElementById("close").style.display = "flex"
        document.getElementById("input").style.display = "flex"
        document.getElementById("search").style.display = "flex"
        document.body.style.overflow = "hidden"
    } else if (document.getElementById("close").style.display == "flex") {
        document.getElementById("close").style.display = ""
        document.getElementById("input").style.display = ""
        document.getElementById("search").style.display = ""
        document.body.style.overflow = ""
    }
}

function embeddedVideo() {
    console.log(document.getElementById("youtube-embed").style.display)
    if (document.getElementById("youtube-embed").style.display == "") {
        document.getElementById("youtube-embed").style.display = "flex"
        document.body.style.overflow = "hidden"
    } else if (document.getElementById("youtube-embed").style.display == "flex") {
        document.getElementById("youtube-embed").style.display = ""
        document.body.style.overflow = ""
    }
}

window.onscroll = function() {
    var nav = document.getElementById("nav");
    if (window.pageYOffset > 900) {
        nav.classList.add("positioning");
    } else {
        nav.classList.remove("positioning")
    }
}