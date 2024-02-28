const data = {
    "eng":{
       mainTitle:"website",
       secondTitle:"With help form",
       dropDownTitleTop:"Games",
       dropDownTopLeft:"Devblog",
       dropDownTopRight:"Done",
       dropDownTitleBottom:"Community",
       dropDownBottomLeft:"News",
       dropDownBottomRight:"Sites",/*
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :"",
       :""*/
    },
    "hun":{
        mainTitle:"weboldal",
        secondTitle:"Segített",
        dropDownTitleTop:"Játékok",
        dropDownTopLeft:"Devblog",
        dropDownTopRight:"Kész",
        dropDownTitleBottom:"Közösség",
        dropDownBottomLeft:"Hírek",
        dropDownBottomRight:"Oldalak",/*
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :""*/
    }
}




















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
    if (!`${theme.src}`.endsWith("dark.png")){
        setToLightTheme()
    }
    else {
        setToDarkTheme()
    }
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

function setToDarkTheme() {
    var buttons = document.querySelectorAll(".button")
    var navbar = document.querySelector(".navbar")
    var links = document.getElementsByTagName("a")
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    var h1Title = document.getElementById("h1title").style
    var h2Title = document.getElementById("h2title").style
    var content = document.getElementById("content").style
    
    navbar.classList.remove("bg-dark")
    navbar.classList.add("bg-light")

    theme.src = "images/light.png"
    
    themeBtn.style.backgroundColor = "rgb(52,58,64)"
    theme.style.backgroundColor = "rgb(52,58,64)"
    h1Title.backgroundColor = "rgba(255,255,255,0.85)"
    h2Title.backgroundColor = "rgba(255,255,255,0.85)"
    content.backgroundColor = "rgba(255,255,255,0.5)"

    h1Title.color = "black"
    h2Title.color = "black"
    content.color = "black"
    h2Title.borderTopColor = "black"

    for (const button of buttons) {
        button.style.color = "black"
    }

    for (const link of links) {
        link.classList.remove("light")
        link.classList.add("dark")
    }
}

function setToLightTheme() {
    var buttons = document.querySelectorAll(".button")
    var navbar = document.querySelector(".navbar")
    var links = document.getElementsByTagName("a") 
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    var h1Title = document.getElementById("h1title").style
    var h2Title = document.getElementById("h2title").style
    var content = document.getElementById("content").style

    navbar.classList.remove("bg-light")
    navbar.classList.add("bg-dark")

    theme.src= "images/dark.png"


    themeBtn.style.backgroundColor = "white"
    theme.style.backgroundColor = "white"
    h1Title.backgroundColor = "rgba(0,0,0,0.85)"
    h2Title.backgroundColor = "rgba(0,0,0,0.85)"
    content.backgroundColor = "rgba(0,0,0,0.85)"

    h1Title.color = "white"
    h2Title.color = "white"
    content.color = "white"
    h2Title.borderTopColor = "white"

    for (const button of buttons) {
        button.style.color = "white"
    }

    for (const link of links) {
        link.classList.remove("dark")
        link.classList.add("light")
    }
}

function setToHungarian() {
    var language = document.getElementById("language")
    language.src = "images/flag_HU.png"

    for (const [key, value] of Object.entries(data["hun"])) {
        document.querySelector(`.${key}`).textContent = value
      }
}

function setToEnglish() {
    var language = document.getElementById("language")
    language.src= "images/flag_EN.png"

    

    for (const [key, value] of Object.entries(data["eng"])) {
        document.querySelector(`.${key}`).textContent = value
      }
}

