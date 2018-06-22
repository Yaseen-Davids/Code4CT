// This is the slide counter
let slideNow = 0;

function slide_1() {
    slideNow = 1;
    $("#img_1").fadeIn("slow");
    $("#img_2").fadeOut("slow");
    $("#img_3").fadeOut("slow");
}
function slide_2() {
    slideNow = 2;
    $("#img_2").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_3").fadeOut("slow");
}
function slide_3() {
    slideNow = 3;
    $("#img_3").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_2").fadeOut("slow");
}

// This is the onclick function for the next slide
// function nextSlide(){

//     // Go to next slide
//     if (slideNow == 0 || slideNow == "0"){
//         $("#img_1").animate({marginLeft: "-100vw"},700);
//         $("#img_2").animate({marginLeft: "100vw"},700);        
//         setTimeout(function(){
//             $("#img_1").hide();
//             $("#img_2").show();
//             $("#img_2").animate({marginLeft: "0vw"},700);
//             slideNow = 1;
//         },700)
//     }

//     // Go to next slide
//     if (slideNow == 1){
//         $("#img_2").animate({marginLeft: "-100vw"},700);
//         $("#img_3").animate({marginLeft: "100vw"},700);        
//         setTimeout(function(){
//             slideNow = 2;
//             $("#img_2").hide();
//             $("#img_3").show();
//             $("#img_3").animate({marginLeft: "0vw"},700);
//         },700)
//     }

//     // Go to next slide
//     if (slideNow == 2){
//         $("#img_3").animate({marginLeft: "-100vw"},700);
//         $("#img_4").animate({marginLeft: "100vw"},700);        
//         setTimeout(function(){
//             slideNow = 3;
//             $("#img_3").hide();
//             $("#img_4").show();
//             $("#img_4").animate({marginLeft: "0vw"},700);
//         },700)
//     }
// }

// // This is the onclick function to go to the previous slide
// function backSlide(){

//     // Go to previous slide
//     if (slideNow == 1){
//         $("#img_2").animate({marginLeft: "100vw"},700);
//         setTimeout(function(){
//             slideNow = 0;
//             $("#img_2").hide();
//             $("#img_1").show();
//             $("#img_1").animate({marginLeft: "0vw"},700);
//         },700)
//     }

//     // Go to previous slide
//     if (slideNow == 2){
//         $("#img_3").animate({marginLeft: "100vw"},700);
//         setTimeout(function(){
//             slideNow = 1;
//             $("#img_3").hide();
//             $("#img_2").show();
//             $("#img_2").animate({marginLeft: "0vw"},700);
//         },700)
//     }

//     // Go to previous slide
//     if (slideNow == 3){
//         $("#img_4").animate({marginLeft: "100vw"},700);
//         setTimeout(function(){
//             slideNow = 2;
//             $("#img_4").hide();
//             $("#img_3").show();
//             $("#img_3").animate({marginLeft: "0vw"},700);
//         },700)
//     }
// }

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

    // if (window.matchMedia("(max-width: +500px)").matches){
    //     navbarLinks.style.visibility = "visible";
    //     navbarLinks.style.height = "75px";
    // }
    // else if (!window.matchMedia("(max-width: 500px)").matches){
    //     navbarLinks.style.visibility = "collapse";
    //     navbarLinks.style.height = "80vh";
    // }
}

window.onload = function countUpStatistics() {
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

    function startCarousel() {
        let sponsor1 = document.getElementById("sponsor_logo1");
        let sponsor2 = document.getElementById("sponsor_logo2");
        let sponsor3 = document.getElementById("sponsor_logo3");
        let sponsor4 = document.getElementById("sponsor_logo4");
        let sponsor5 = document.getElementById("sponsor_logo5");
        let sponsor6 = document.getElementById("sponsor_logo6");
        let sponsor7 = document.getElementById("sponsor_logo7");
        let sponsor8 = document.getElementById("sponsor_logo8");
        let sponsor9 = document.getElementById("sponsor_logo9");
        let sponsor10 = document.getElementById("sponsor_logo10");
    
        let theSponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,sponsor7, sponsor8, sponsor9, 
            sponsor10];
    
        for (let i = 0; i < theSponsors.length; i++){
            $(theSponsors[i]).animate({marginLeft: "+=250px"},1000);
        }

        function checkSponsorPos() {
            if (sponsor7.style.marginLeft == "1750px"){
                sponsor7.style.marginLeft = "-750px";
            }
            if (sponsor1.style.marginLeft == "1750px"){
                sponsor1.style.marginLeft = "-750px";
            }
            if (sponsor2.style.marginLeft == "1750px"){
                sponsor2.style.marginLeft = "-750px";
            }
            if (sponsor3.style.marginLeft == "1750px"){
                sponsor3.style.marginLeft = "-750px";
            }
            if (sponsor4.style.marginLeft == "1750px"){
                sponsor4.style.marginLeft = "-750px";
            }
            if (sponsor5.style.marginLeft == "1750px"){
                sponsor5.style.marginLeft = "-750px";
            }
            if (sponsor6.style.marginLeft == "1750px"){
                sponsor6.style.marginLeft = "-750px";
            }
            if (sponsor8.style.marginLeft == "1750px"){
                sponsor8.style.marginLeft = "-750px";
            }
            if (sponsor9.style.marginLeft == "1750px"){
                sponsor9.style.marginLeft = "-750px";
            }
            if (sponsor10.style.marginLeft == "1750px"){
                sponsor10.style.marginLeft = "-750px";
            }
        }

        setInterval(checkSponsorPos, 1100);
    }

    setInterval(startCarousel, 2000);
    
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: -33.924692, lng: 18.448723};
    // -33.924692, 18.448723
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('contact_map_box'), {zoom: 18, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  initMap();