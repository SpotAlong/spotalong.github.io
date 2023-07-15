const host = `${window.location.protocol}//${window.location.host}`

var homebutton = document.getElementById("homebutton");
homebutton.onclick = function() {
    window.location.assign(`${host}/#home`);
}

var aboutbutton = document.getElementById("aboutbutton");
aboutbutton.onclick = function() {
    window.location.assign(`${host}/#about`);
}

var featuresbutton = document.getElementById("featuresbutton");
featuresbutton.onclick = function() {
    window.location.assign(`${host}/#features`);
}

var downloadbutton = document.getElementById("downloadbutton");
downloadbutton.onclick = function() {
    window.location.assign(`${host}/#download`);
}

var icon = document.getElementById("logo");
icon.onclick = function() {
    window.location.assign(`${host}/`)
}

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

var homebuttondrop = document.getElementById("homebuttondrop");
homebuttondrop.onclick = homebutton.onclick;

var aboutbuttondrop = document.getElementById("aboutbuttondrop");
aboutbuttondrop.onclick = aboutbutton.onclick;

var featuresbuttondrop = document.getElementById("featuresbuttondrop");
featuresbuttondrop.onclick = featuresbutton.onclick;

var downloadbuttondrop = document.getElementById("downloadbuttondrop");
downloadbuttondrop.onclick = downloadbutton.onclick;
