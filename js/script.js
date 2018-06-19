// // This is a function that runs when the user scrolls on the website
// onscroll = function navbarSize() {
//     let theNavLogo = document.getElementById("nav_logo");
//     let theNavMain = document.getElementById("navbar");
//     let theNavLinks = document.getElementById("links_box");
//     let theLinksBox = document.getElementById("nav_links");
//     let theNavSearch = document.getElementById("search_box");

//     // These are the changes to be made if the condition is met
//     if (window.scrollY >= 100){
//         theNavLogo.style.height = "80px";
//         theNavLogo.style.transition = "all 0.5s";

//         theNavMain.style.height = "80px";
//         theNavMain.style.transition = "all 0.5s";

//         theLinksBox.style.height = "70px";
//         theLinksBox.style.transition = "all 0.5s";

//         theNavLinks.style.marginTop = "10px";
//         theNavLinks.style.transition = "all 0.5s";

//         theNavSearch.style.marginTop = "10px";
//         theNavSearch.style.transition = "all 0.5s";
//     }

//     // These are the changes to be made if the condition is not met    
//     else if (window.scrollY < 100){
//         theNavMain.style.height = "100px";
//         theNavMain.style.transition = "all 0.5s";

//         theNavLogo.style.height = "100px";
//         theNavLogo.style.transition = "all 0.5s";

//         theLinksBox.style.height = "85px";
//         theLinksBox.style.transition = "all 0.5s";
        
//         theNavLinks.style.marginTop = "20px";
//         theNavLinks.style.transition = "all 0.5s";

//         theNavSearch.style.marginTop = "20px";
//         theNavSearch.style.transition = "all 0.5s";
//     }
// }

// This is the slide counter
let slideNow = 0;

// This is the onclick function for the next slide
function nextSlide(){

    // Go to next slide
    if (slideNow == 0 || slideNow == "0"){
        $("#img_1").animate({marginLeft: "-100vw"},700);
        $("#img_2").animate({marginLeft: "100vw"},700);        
        setTimeout(function(){
            $("#img_1").hide();
            $("#img_2").show();
            $("#img_2").animate({marginLeft: "0vw"},700);
            slideNow = 1;
        },700)
    }

    // Go to next slide
    if (slideNow == 1){
        $("#img_2").animate({marginLeft: "-100vw"},700);
        $("#img_3").animate({marginLeft: "100vw"},700);        
        setTimeout(function(){
            slideNow = 2;
            $("#img_2").hide();
            $("#img_3").show();
            $("#img_3").animate({marginLeft: "0vw"},700);
        },700)
    }

    // Go to next slide
    if (slideNow == 2){
        $("#img_3").animate({marginLeft: "-100vw"},700);
        $("#img_4").animate({marginLeft: "100vw"},700);        
        setTimeout(function(){
            slideNow = 3;
            $("#img_3").hide();
            $("#img_4").show();
            $("#img_4").animate({marginLeft: "0vw"},700);
        },700)
    }
}

// This is the onclick function to go to the previous slide
function backSlide(){

    // Go to previous slide
    if (slideNow == 1){
        $("#img_2").animate({marginLeft: "100vw"},700);
        setTimeout(function(){
            slideNow = 0;
            $("#img_2").hide();
            $("#img_1").show();
            $("#img_1").animate({marginLeft: "0vw"},700);
        },700)
    }

    // Go to previous slide
    if (slideNow == 2){
        $("#img_3").animate({marginLeft: "100vw"},700);
        setTimeout(function(){
            slideNow = 1;
            $("#img_3").hide();
            $("#img_2").show();
            $("#img_2").animate({marginLeft: "0vw"},700);
        },700)
    }

    // Go to previous slide
    if (slideNow == 3){
        $("#img_4").animate({marginLeft: "100vw"},700);
        setTimeout(function(){
            slideNow = 2;
            $("#img_4").hide();
            $("#img_3").show();
            $("#img_3").animate({marginLeft: "0vw"},700);
        },700)
    }
}

// This is my simple Smooth scroller, this takes to you to the top of the page when clicked
function backToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function changeToClose() {
    let line1 = document.getElementById("menu_line1");
    let line2 = document.getElementById("menu_line2");
    let line3 = document.getElementById("menu_line3");
    let navbarLinks = document.getElementById("nav_links");

    if (line1.style.marginTop == "30px"){
        line1.style.marginTop = "20px";
        line1.style.transform = "rotate(0deg)";
        line2.style.transform = "rotate(0deg)";
        line2.style.marginTop = "10px";
        line2.style.transition = "all 0.3s";
        line1.style.transition = "all 0.3s";
        line3.style.opacity = "1";
        line3.style.transition = "all 0.3s";
    }
    else{
        line1.style.marginTop = "30px";
        line1.style.transform = "rotate(45deg)";
        line1.style.transition = "all 0.3s";
        line2.style.marginTop = "0px";
        line2.style.transform = "rotate(-45deg)";
        line2.style.transition = "all 0.3s";
        line3.style.opacity = "0";
        line3.style.transition = "all 0.3s";
    }

    if (navbarLinks.style.visibility == "visible"){
        navbarLinks.style.visibility = "collapse";
        navbarLinks.style.height = "0vh";
        navbarLinks.style.transition = "all 0.7s";
    }
    else{
        navbarLinks.style.visibility = "visible";
        navbarLinks.style.height = "80vh";
        navbarLinks.style.transition = "all 0.7s";
    }
}

onload = function countUpStatistics() {
    let coffeeNumber = document.getElementById("coffee_value");
    let girlsNumber = document.getElementById("girls_value");
    let projectNumber = document.getElementById("project_value");
    let codingNumber = document.getElementById("hours_value");
    let statisticsPos = document.getElementById("statistic_section").offsetTop -500;
    let statisticSection = document.getElementById("statistic_section");

    function countUpTimer() {
        let coffeeValue = 0;
        setInterval(function() {
            if (coffeeValue == 3000){
                clearInterval;
            }
            else{
                coffeeValue += 20;
                coffeeNumber.innerHTML = coffeeValue + "+";
                coffeeNumber.style.fontSize = "1.5em";
                coffeeNumber.style.fontWeight = "bolder";
            }
        },10);

        let girlsValue = 0;
        setInterval(function(){
            if (girlsValue == 780){
                clearInterval;
            }
            else{
                girlsValue += 20;
                girlsNumber.innerHTML = girlsValue + "+";
                girlsNumber.style.fontSize = "1.5em";
                girlsNumber.style.fontWeight = "bolder";
            }
        },50);

        let projectValue = 0;
        setInterval(function(){
            if (projectValue == 3120){
                clearInterval;
            }
            else{
                projectValue += 20;
                projectNumber.innerHTML = projectValue + "+";
                projectNumber.style.fontSize = "1.5em";
                projectNumber.style.fontWeight = "bolder";
            }
        },10);

        let codingValue = 7000;
        setInterval(function(){
            if (codingValue == 8765){
                clearInterval;
            }
            else{
                codingValue += 5;
                codingNumber.innerHTML = codingValue + "+";
                codingNumber.style.fontSize = "1.5em";
                codingNumber.style.fontWeight = "bolder";
            }
        },0);
    }

    countUpTimer();
}