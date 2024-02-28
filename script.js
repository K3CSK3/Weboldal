function hamburgerClick(){
    let dropdownStyle = document.getElementById("dropdown-menu").style;
    var hamburger = document.querySelector(".hamburger");
    let burgerStyle = document.getElementById("burgerStyle").style;
    let imageStyle = document.getElementById("navbarImage").style;
    hamburger.classList.toggle("is-active");

    if (dropdownStyle.animationName === "expand") {
        dropdownStyle.animationName = "shrink"  
        burgerStyle.animationName = "borderToRight"
        imageStyle.animationName = "borderToLeft"
    } else {
        dropdownStyle.animationName = "expand"
        dropdownStyle.display = "block"
        burgerStyle.animationName = "borderToLeft"
        imageStyle.animationName = "borderToRight"
    }
}

function closeDropdown(){
    let dropdownStyle = document.getElementById("dropdown-menu").style;
    var hamburger = document.querySelector(".hamburger");
    if (window.innerWidth > 600){
        hamburger.classList.remove("is-active");

        dropdownStyle.animationName = "shrink"
    }
}

window.addEventListener("resize", closeDropdown);
window.addEventListener("load",closeDropdown)

function title1Expand(){
    document.getElementById("title1").style.transform = "scale(111%)"
}

function title2Expand(){
    document.getElementById("title2").style.transform = "scale(111%)"
}

function resetTitle(){
    document.getElementById("title1").style.transform = "scale(105%)"
    document.getElementById("title2").style.transform = "scale(105%)"
}

function changeTheme(){
    var theme = document.getElementById("theme")
    if (`${theme.src}`.endsWith("light.png")){
        setToDarkTheme()
    }
    else {
        setToLightTheme()
    }
}

function setToDarkTheme() {
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    
    themeBtn.style.backgroundColor = "rgb(52,58,64)"
    theme.style.backgroundColor = "rgb(52,58,64)"
    theme.src = "images/dark.png"
}

function setToLightTheme() {
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    
    themeBtn.style.backgroundColor = "white"
    theme.style.backgroundColor = "white"
    theme.src= "images/light.png"
}


function changeLanguage(){
    var language = document.getElementById("language")
    if (`${language.src}`.endsWith("flag_HU.png")){
        setToEnglish()
    }
    else {
        setToHungarian()
    }
}

function setToHungarian() {
    var language = document.getElementById("language")
    language.src = "images/flag_HU.png"
}

function setToEnglish() {
    var language = document.getElementById("language")
    language.src= "images/flag_EN.png"
}

window.addEventListener("resize", mediumScreenSize);
window.addEventListener("load", mediumScreenSize);


function mediumScreenSize(){

    var hamburger = document.querySelector(".hamburger");
    let navImage = document.getElementById("navbarImage")
    let dropDownMenu = document.getElementById("dropdown-menu")

    if (window.innerWidth > 600){
        navImage.style.animationName = "borderToLeft"
        hamburger.style.animationName = "borderToRight"
        navImage.style.display = "none"
        hamburger.style.display = "none"
        dropDownMenu.style.display = "none"
    }
    else{
        navImage.style.display = "inline"
        hamburger.style.display = "inline";
    }
}