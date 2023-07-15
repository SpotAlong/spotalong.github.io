const closeAfterClick = ['homebuttondrop', 'aboutbuttondrop', 'developmentbuttondrop', 'featuresbuttondrop',
    'downloadbuttondrop', 'logo'];
const navcontainer = document.getElementById('dropdownnavcontainer');
const menubutton = document.getElementById('menubutton');
const dropbuttons = document.querySelectorAll('.dropbuttons');
var dropdownstate = false;
const navbar = document.getElementById('navbar');
const prefix = `${window.location.protocol}//${window.location.host}`

closeAfterClick.forEach((btn) => {
    const b = document.getElementById(btn);
    b.onclick = () => {close();};
});

function close() {
    if (dropdownstate) {
        navcontainer.style.height = '0px';
        navcontainer.style.paddingTop = '0px';
        navcontainer.style.paddingBottom = '0px';
        dropbuttons.forEach((btn) => {
            btn.style.opacity = '0';
        });
    }
    dropdownstate = false;
}

menubutton.onclick = function() {
    if (dropdownstate) {
        close();
    }
    else {
        navcontainer.style.height = 'min(400px, 70vh)';
        navcontainer.style.paddingTop = '1rem';
        navcontainer.style.paddingBottom = '1rem';
        dropbuttons.forEach((btn) => {
            btn.style.opacity = '1';
        });
        dropdownstate = true;
    }
}

document.body.addEventListener('click', function (event) {
    if (!navbar.contains(event.target) && !menubutton.contains(event.target) && dropdownstate) {
        close();
    }
});