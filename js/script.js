// This is the slide counter
let slideNow = 0;

$("#slideBtn_1").click(function(){
    slideNow = 1;
    $("#img_1").fadeIn("slow");
    $("#img_2").fadeOut("slow");
    $("#img_3").fadeOut("slow");
});

$("#slideBtn_2").click(function(){
    slideNow = 2;
    $("#img_2").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_3").fadeOut("slow");
});

$("#slideBtn_3").click(function(){
    slideNow = 3;
    $("#img_3").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_2").fadeOut("slow");
});

// let row3_imgs = [row3_img1, row3_img2, row3_img3, row3_img4];

// $("#portfolio_btn_1").click(function(){
//     $(row3_imgs[0]).animate({marginTop: "0px"},1000);
//     $(row3_imgs[1]).animate({marginTop: "0px"},1200);
//     $(row3_imgs[2]).animate({marginTop: "0px"},1400);
//     $(row3_imgs[3]).animate({marginTop: "0px"},1600);
// })
// $("#portfolio_btn_2").click(function(){
//     $(row3_imgs[0]).animate({marginTop: "300px"},1000);
//     $(row3_imgs[1]).animate({marginTop: "300px"},1200);
//     $(row3_imgs[2]).animate({marginTop: "300px"},1400);
//     $(row3_imgs[3]).animate({marginTop: "300px"},1600);
// })

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

onload = function countUpStatistics() {
    let coffeeNumber = document.getElementById("coffee_value");
    let girlsNumber = document.getElementById("girls_value");
    let projectNumber = document.getElementById("project_value");
    let codingNumber = document.getElementById("hours_value");
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
        let sponsor1 = $("#sponsor_logo1");
        let sponsor2 = $("#sponsor_logo2");
        let sponsor3 = $("#sponsor_logo3");
        let sponsor4 = $("#sponsor_logo4");
        let sponsor5 = $("#sponsor_logo5");
        let sponsor6 = $("#sponsor_logo6");
        let sponsor7 = $("#sponsor_logo7");
        let sponsor8 = $("#sponsor_logo8");
        let sponsor9 = $("#sponsor_logo9");
        let sponsor10 = $("#sponsor_logo10");
    
        let theSponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,sponsor7, sponsor8, sponsor9, 
            sponsor10];
    
        for (let i = 0; i < theSponsors.length; i++){
            $(theSponsors[i]).animate({marginLeft: "+=250px"},1000);
        }

        function checkSponsorPos() {

            for (let i = 0; i < theSponsors.length; i++){
                if (theSponsors[i].css("margin-left") == "1750px"){
                    theSponsors[i].css("margin-left","-750px");
                }
            }
        }

        setInterval(checkSponsorPos, 1100);
    }

    setInterval(startCarousel, 2000);
    
}

function initMap() {
    // The location of Code4CT
    var Code4CT = {lat: -33.924692, lng: 18.448723};
    // The map, centered at Code4CT
    var map = new google.maps.Map(
        document.getElementById('contact_map_box'), {zoom: 18, center: Code4CT});
    // The marker, positioned at Code4CT
    var marker = new google.maps.Marker({position: Code4CT, map: map});
}

initMap();

// This checks if the webpage is loaded completely
//   window.onload = function () { alert("It's loaded!") }