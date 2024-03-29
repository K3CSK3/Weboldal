const data = {
    "eng": {
        mainTitle: "website",
        secondTitle: "With help from",
        dropDownTitleTop: "Games",
        dropDownTopLeft: "Devblog",
        dropDownTopRight: "Done",
        dropDownTitleBottom: "Community",
        dropDownBottomLeft: "News",
        dropDownBottomRight: "Projects",
        changeTheme: "Change Theme",
        changeLanguage: "Change Language",
        introTitle:"Introduction",
        introduction: "\"Hello and welcome to the Goat Wick channel\" is a familiar sentence but here it is... strange. For the select few people who might take a gander at this site is probably looking for something new, something different, they don't just care about a \"youtuber\" acting like a fool, YOU who are currently reading this are curious what is going on exactly behind that online personality, or maybe you want to take part in searching for clues? Who knows what else can be found not just on this site but in the games, videos, posts. Nothing is stopping you from searching, at least not yet...",
        elementdev:"Devblog",
        elementgame:"Games",
        elementproj:"Projects",
        elementnews:"News",
        /*:"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :""*/
    },
    "hun": {
        mainTitle: "weboldal",
        secondTitle: "Segített",
        dropDownTitleTop: "Játékok",
        dropDownTopLeft: "Devblog",
        dropDownTopRight: "Kész",
        dropDownTitleBottom: "Közösség",
        dropDownBottomLeft: "Hírek",
        dropDownBottomRight: "Projektek",
        changeTheme: "Témaváltás",
        changeLanguage: "Nyelvváltás",
        introTitle:"Bemutatkozás",
        introduction: "\"Sziasztok én kecskeman vagyok\", ismerős mondat mivel minden videó így kezdődik, de ez most valahogy... más. Az embereknek az a kis százaléka aki ezt az oldalt megnézi valami más után kutat, nem csak az érdekli ahogy egy \"youtuber\" játsza a bolondot, TE aki most ezt olvasod érdekel hogy mégis mi és ki van \"Kecskeman\" mögött, vagy esetleg részt vennél a nyom keresésben? Ki tudja hogy mit lehet találni nem csak az oldalakon de akár a játékokban, videókban, posztokban. Nincs semmi ami megakadályoz abban hogy ennek utánna járj, vagy... mégis?",
        elementdev:"Devblog",
        elementgame:"Játékok",
        elementproj:"Projektek",
        elementnews:"Hírek",
        /*:"",
        :"",
        :"",
        :"",
        :"",
        :"",
        :""*/
    }
}

function loadSite() {
    const loadTime = 000

    var loaderCircles = document.querySelectorAll(".loaderCircle")
    var loader = document.getElementById("loader")
    var smallDescElements = document.querySelectorAll(".smallDescElement")
    loader.animate([{ opacity: '100%' }, { opacity: '100%' }, { opacity: '0%' }], { duration: loadTime, iterations: 1, fill: 'forwards' })

    for (const circle of loaderCircles) {
        circle.animate([{ opacity: '100%' }, { opacity: '100%' }, { opacity: '0%' }], { duration: loadTime, iterations: 1, fill: 'forwards' })
    }

    setTimeout(() => {
        for (const circle of loaderCircles) {
            circle.style.display = "none"
        }
        loader.style.display = "none"
        showInfo("Devb")
    }, loadTime);

    let interval;

    cycleInfo()

    let cycleInfos = 0;

    setInterval(()=>{
        addEventListener("click", (e)=>{
            switch (e.target) {
                case document.getElementById("Devb"):
                    cycleInfo = 0;
                    break;
                case document.getElementById("Done"):
                    cycleInfo = 1;
                    break;
                case document.getElementById("Projects"):
                    cycleInfo = 2;
                    break;
                case document.getElementById("News"):
                    cycleInfo = 3;
                    break;
            }
        })
        addEventListener("mouseover", (e)=>{
            for (const smallDescElement of smallDescElements) {
                if (e.target === smallDescElement) {
                    clearInterval(interval)
                }
            }
        })
        addEventListener("mouseout", (e)=>{
            for (const smallDescElement of smallDescElements) {
                if (e.target === smallDescElement) {
                    clearInterval(interval)
                    cycleInfo()
                }
            }
        })
    },1
    )

    function cycleInfo(){
        interval = setInterval(() => {
        cycleInfos++;
        switch (cycleInfos) {
            case 1:
                showInfo("Devb");
                break;            
            case 2:
                showInfo("Done");
                break;            
            case 3:
                showInfo("Projects");
                break;            
            case 4:
                showInfo("News");
                break;            
            default:
                cycleInfos = 1;
                showInfo("Devb");
                break;
        }
    },5000)}
}

function hamburgerClick() {
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

function closeDropdown() {
    let dropdownStyle = document.getElementById("dropdown-menu").style;
    var hamburger = document.querySelector(".hamburger");
    if (window.innerWidth > 600) {
        hamburger.classList.remove("is-active");

        dropdownStyle.animationName = "shrink"
    }
}

window.addEventListener("resize", closeDropdown);
window.addEventListener("load", closeDropdown)

function title1Expand() {
    document.getElementById("title1").style.transform = "scale(111%)"
}

function title2Expand() {
    document.getElementById("title2").style.transform = "scale(111%)"
}

function resetTitle() {
    document.getElementById("title1").style.transform = "scale(105%)"
    document.getElementById("title2").style.transform = "scale(105%)"
}

window.addEventListener("resize", mediumScreenSize);
window.addEventListener("load", mediumScreenSize);


function mediumScreenSize() {

    var hamburger = document.querySelector(".hamburger").style
    let navImage = document.getElementById("navbarImage").style
    let dropDownMenu = document.getElementById("dropdown-menu").style
    let changeLanguageText = document.querySelector(".changeLanguage").style
    let changeThemeText = document.querySelector(".changeTheme").style

    if (window.innerWidth > 600) {
        navImage.animationName = "borderToLeft"
        hamburger.animationName = "borderToRight"
        navImage.display = "none"
        hamburger.display = "none"
        dropDownMenu.display = "none"
        changeLanguageText.display = "inline"
        changeThemeText.display = "inline"
    }
    else {
        navImage.display = "inline"
        hamburger.display = "inline"
        changeLanguageText.display = "none"
        changeThemeText.display = "none"
    }
}

function changeTheme() {
    var theme = document.getElementById("theme")
    if (!`${theme.src}`.endsWith("dark.png")) {
        setToLightTheme()
    }
    else {
        setToDarkTheme()
    }
}

function setToDarkTheme() {

    const change = [
        { "background": "rgba(0,0,0,0.85)", "color": "white" },
        { "background": "rgba(255,255,255,0.5)", "color": "black" },
    ]
    const settings = {
        duration: 200,
        iterations: 1,
        fill: "forwards"
    }
    var buttons = document.querySelectorAll(".button")
    var smallDesc = document.querySelector(".smallDesc")
    var navbar = document.querySelector(".navbar")
    var links = document.getElementsByTagName("a")
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    var h1Title = document.getElementById("h1title")
    var h2Title = document.getElementById("h2title")
    var content = document.getElementById("content")
    var elements = document.querySelectorAll(".element")
    var intro = document.getElementById("intro")
    var introTitle = document.getElementById("introTitle")

    navbar.classList.remove("bg-dark")
    navbar.classList.add("bg-light")

    theme.src = "images/light.png"

    themeBtn.style.backgroundColor = "rgb(52,58,64)"
    theme.style.backgroundColor = "rgb(52,58,64)"

    h1Title.animate(change, settings)
    h2Title.animate(change, settings)
    content.animate(change, settings)
    intro.animate({"background":"#fffbf7a6", "color":"black"}, settings)
    introTitle.animate({"background":"#fffbf7", "color":"black"}, settings)
    smallDesc.animate({"background":"#fffbf7", "color":"black"}, settings)

    h2Title.borderTopColor = "black"

    for (const element of elements) {
        element.animate({"background":"#fffbf7", "color":"black"}, settings)
    }

    for (const button of buttons) {
        button.style.color = "black"
    }

    for (const link of links) {
        link.classList.remove("light")
        link.classList.add("dark")
    }
}

function setToLightTheme() {

    const change = [
        { "background": "rgba(255,255,255,0.5)", "color": "black" },
        { "background": "rgba(0,0,0,0.85)", "color": "white" },
    ]
    const settings = {
        duration: 200,
        iterations: 1,
        fill: "forwards"
    }
    var buttons = document.querySelectorAll(".button")
    var smallDesc = document.querySelector(".smallDesc")
    var navbar = document.querySelector(".navbar")
    var links = document.getElementsByTagName("a")
    var themeBtn = document.getElementById("themeBtn")
    var theme = document.getElementById("theme")
    var h1Title = document.getElementById("h1title")
    var h2Title = document.getElementById("h2title")
    var content = document.getElementById("content")
    var elements = document.querySelectorAll(".element")
    var intro = document.getElementById("intro")
    var introTitle = document.getElementById("introTitle")

    navbar.classList.remove("bg-light")
    navbar.classList.add("bg-dark")

    theme.src = "images/dark.png"


    themeBtn.style.backgroundColor = "white"
    theme.style.backgroundColor = "white"

    h1Title.animate(change, settings)
    h2Title.animate(change, settings)
    content.animate(change, settings)
    intro.animate({"background":"#20201fa6", "color":"white"}, settings)
    introTitle.animate({"background":"#20201f", "color":"white"}, settings)
    smallDesc.animate({"background":"#20201fa6", "color":"white"}, settings)

    h2Title.borderTopColor = "white"

    for (const element of elements) {
        element.animate({"background":"#20201f", "color":"white"}, settings)
    }

    for (const button of buttons) {
        button.style.color = "white"
    }

    for (const link of links) {
        link.classList.remove("dark")
        link.classList.add("light")
    }
}

function changeLanguage() {
    var language = document.getElementById("language");

    if (`${language.src}`.endsWith("flag_HU.png")) {
        languageSwitch("EN", "eng");
    } else {
        languageSwitch("HU", "hun");
    }
}

function languageSwitch(lang, dictLang) {
    var language = document.getElementById("language");
    language.src = `images/flag_${lang}.png`;

    for (const [key, value] of Object.entries(data[`${dictLang}`])) {
        document.querySelector(`.${key}`).textContent = "";
        let index = 0;
        let intervalId = setInterval(() => {
            if (index >= value.length) {
                clearInterval(intervalId);
                return;
            }
            document.querySelector(`.${key}`).textContent += value[index];
            index++;
        }, 1000 / value.length);

        language.addEventListener("click", () => {
            clearInterval(intervalId);
        });
    }
}

function showInfo(page) {
    let info = document.querySelector(`.${page}Content`).style
    let button = document.querySelector(`.${page}`).style
    let btns = document.querySelectorAll('.element')
    let contents = document.querySelectorAll('.contents')


    for (const btn of btns) {
        btn.style.width = "fit-content"
        btn.style.display = "inline"
        btn.style.borderRadius = "20px"
        btn.style.paddingBottom = "0px"
        btn.style.fontSize = "3vw"
    }

    for (const content of contents) {
        content.style.display = "none"
    }

    info.display = "block"
    button.width = "30%"
    button.borderRadius = "20px 20px 0px 0px"
    button.paddingBottom = "5px"
    button.fontSize = "4vw"
}