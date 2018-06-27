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

$(".portfolio_1").show();
$(".portfolio_2").hide();
$(".portfolio_3").hide();

$("#portfolio_btn_1").click(function(){
    $(".portfolio_1").fadeIn(500);
    $(".portfolio_2").fadeOut(500);
    $(".portfolio_3").fadeOut(500);
    $(".portfolio_2").hide();
    $(".portfolio_3").hide();
});

$("#portfolio_btn_2").click(function(){
    $(".portfolio_1").fadeOut(500);
    $(".portfolio_3").fadeOut(500);
    $(".portfolio_2").fadeIn(500);
    $(".portfolio_1").hide();
    $(".portfolio_3").hide();
});

$("#portfolio_btn_3").click(function(){
    $(".portfolio_1").fadeOut(500);
    $(".portfolio_2").fadeOut(500);
    $(".portfolio_3").fadeIn(500);
    $(".portfolio_1").hide();
    $(".portfolio_2").hide();
});