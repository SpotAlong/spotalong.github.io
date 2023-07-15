var dropdownstate = false;
var menubutton = document.getElementById("menu");
var dropdown = document.getElementById("dropdown");
var dropbuttons = document.getElementsByClassName("dropbuttons");

function openOrClose() {
    if(dropdownstate == false) {
        dropdown.style.display = "flex";
        dropdown.style.opacity = "100%";
        dropdown.style.height = "40%";
        for(var i = 0; i < dropbuttons.length; i++) {
            dropbuttons[i].style.display = "block";
        }

        dropdownstate = true;
    }
    else {
        dropdown.style.opacity = "0%";
        dropdown.style.height = "0%";
        dropdownstate = false;
        setTimeout(() => {
            if (dropdownstate == false) {
                dropdown.style = "";
                for(var i = 0; i < dropbuttons.length; i++) {
                    dropbuttons[i].style = "";
                }
            }
        }, 500)

    }
}

menubutton.onclick = openOrClose;
window.onclick = function(event) {
    var elements = ["menu", "menuimage", "dropdown", "homebuttondrop", "aboutbuttondrop", "featuresbuttondrop",
    "downloadbuttondrop"];
    if(!elements.includes(event.target.id) && dropdownstate == true) {
        openOrClose();
    }
}

var homebutton = document.getElementById("homebuttondrop");
var home = document.getElementById("home");
homebutton.onclick = function() {
    home.scrollIntoView({behavior: "smooth"});
    openOrClose();
}

var aboutbutton = document.getElementById("aboutbuttondrop");
var about = document.getElementById("about");
aboutbutton.onclick = function() {
    about.scrollIntoView({behavior: "smooth"});
    openOrClose();
}

var featuresbutton = document.getElementById("featuresbuttondrop");
var features = document.getElementById("features");
featuresbutton.onclick = function() {
    features.scrollIntoView({behavior: "smooth"});
    openOrClose();
}

var downloadbutton = document.getElementById("downloadbuttondrop");
var download = document.getElementById("download");
downloadbutton.onclick = function() {
    download.scrollIntoView({behavior: "smooth"});
    openOrClose();
}
