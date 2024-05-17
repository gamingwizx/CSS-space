const TABLET_SIZE = 1000;
const MOBILE_SIZE = 414;

const crewList = ["crew1.html", "crew2.html", "crew3.html", "crew4.html"]
const technologyList = ["technology1.html", "technology2.html", "technology3.html", "technology4.html"]

const sonarWave = document.querySelector("sonar-wave")
const button = document.querySelector(".button");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dots = document.querySelectorAll(".dot");
const navBar = document.querySelector(".nav-bar");
const closeButton = document.querySelector(".mobile-nav-close-button").querySelector("button")

const locationHref = window.location.href;

let number = -1;
const array = []

Array.from(dots).forEach(dots => {
    number += 1;
    return array.push({number, dots})
})

redirectsPage()
loadHeaderLayout()


window.addEventListener("resize", function(e) {
    loadHeaderLayout()
})

dropdownIcon.addEventListener("click", function(e) {
    moveRight(navBar)
})

closeButton.addEventListener("click", function(e) {
    const navBar = document.querySelector(".nav-bar");
    moveLeft(navBar)  
})

let start = Date.now();

function moveRight(elem) {
    let pos = parseInt(elem.dataset.position);
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        
        console.log(pos)
        if (pos == 0){
            clearInterval(timer)
            return
        } 
        pos = pos + 10;
        elem.style.right = pos + "px";
    }, 3)
} 
function moveLeft(elem) {
    let pos = parseInt(elem.dataset.position);
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        
        if (pos == -300){
            clearInterval(timer)
            elem.dataset.position = elem.style.right
            return
        } 
        console.log(pos)
        pos = pos - 10;
        elem.style.right = pos + "px";
    }, 3)
} 

function redirectsPage() {
    array.forEach(element => {
        element.dots.addEventListener("click", function(e) {
            if (locationHref.includes("crew")) window.location.href = crewList[element.number]
            if (locationHref.includes("technology")) window.location.href = technologyList[element.number]
        })
    })
}

function loadHeaderLayout() {
    const clientWidth = document.body.clientWidth;
    const navBar = document.querySelector(".nav-bar");

    if (clientWidth > TABLET_SIZE) {
        dropdownIcon.setAttribute("hidden", true)
        navBar.removeAttribute("hidden");
    }
    
    if (clientWidth < TABLET_SIZE) {
        navBar.removeAttribute("hidden");
        dropdownIcon.setAttribute("hidden", true)
    }

    if (clientWidth < MOBILE_SIZE) {
        dropdownIcon.removeAttribute("hidden")
    }
}