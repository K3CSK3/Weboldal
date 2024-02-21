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
        setTimeout(positionDown(),300)
    } else {
        dropdownStyle.animationName = "expand"
        burgerStyle.animationName = "borderToLeft"
        imageStyle.animationName = "borderToRight"
        setTimeout(positionUp(),300)
    }
}

function positionDown() {
    let imageStyle = document.getElementById("navbarImage").style;
    let burgerStyle = document.getElementById("burgerStyle").style;

    imageStyle.top = "80px"
    burgerStyle.top = "0px"
}

function positionUp() {
    let burgerStyle = document.getElementById("burgerStyle").style;
    let imageStyle = document.getElementById("navbarImage").style;

    burgerStyle.top = "0px"
    imageStyle.top = "80px"
}


function closeDropdown(){
    let dropdownStyle = document.getElementById("dropdown-menu").style;
    let burgerStyle = document.getElementById("burgerStyle").style;
    if (window.innerWidth > 600 && dropdownStyle.animationName === "expand"){
        dropdownStyle.animationName = "shrink"
        
        hamburgerClick()
        burgerStyle.display = "none";
    }
    else {
        burgerStyle.display = "block";
    }
}

window.addEventListener("resize", closeDropdown);

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