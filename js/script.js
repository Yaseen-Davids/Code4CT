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

onload = function slideHeadInfo() {
    let headerInfo = document.getElementById("header_text");

    headerInfo.style.top = "250px";
    headerInfo.style.opacity = "1";
    headerInfo.style.transition = "all 0.95s";
}