const closeAfterClick = ['homebuttondrop', 'aboutbuttondrop', 'developmentbuttondrop', 'featuresbuttondrop',
    'downloadbuttondrop', 'logo'];
const navcontainer = document.getElementById('dropdownnavcontainer');
const menubutton = document.getElementById('menubutton');
const dropbuttons = document.querySelectorAll('.dropbuttons');
var dropdownstate = false;
const navbar = document.getElementById('navbar');
const featurecontainers = document.querySelectorAll('.minicontainer');
const progressBar = document.getElementById('progress');
const numbers = document.querySelectorAll('.numbers');
const mainFeatureImages = document.querySelectorAll('.featureimagesmain');
const altFeatureImages = document.querySelectorAll('.featureimagesalt');
var index = featurecontainers.length - 1;
var animating = true;

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

function transitionFeatures() {
    if (!animating) {
        return;
    }
    featurecontainers[index].classList.remove(['activetext']);
    numbers[index].classList.remove(['gradienttext']);
    mainFeatureImages[index].classList.remove(['activetext']);
    altFeatureImages[index].classList.remove(['activetext']);
    index++;
    if (index === numbers.length) {
        index = 0;
    }
    featurecontainers[index].classList.add(['activetext']);
    numbers[index].classList.add(['gradienttext']);
    mainFeatureImages[index].classList.add(['activetext']);
    altFeatureImages[index].classList.add(['activetext']);
}

function stopAnimating() {
    animating = false;
    clearInterval(id); 
    progressBar.classList.remove(['progressing']);
}

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            animating = true;
            id = setInterval(transitionFeatures, 8000);
            progressBar.classList.add(['progressing']);
        }
        else {
            stopAnimating();
        }
    });
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {
        stopAnimating();
        featurecontainers[index].classList.remove(['activetext']);
        numbers[index].classList.remove(['gradienttext']);
        mainFeatureImages[index].classList.remove(['activetext']);
        altFeatureImages[index].classList.remove(['activetext']);
        featurecontainers[i].classList.add(['activetext']);
        numbers[i].classList.add(['gradienttext']);
        mainFeatureImages[i].classList.add(['activetext']);
        altFeatureImages[i].classList.add(['activetext']);
        index = i;
    }
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(document.querySelector('.featuresmain'));

transitionFeatures();
animating = false;