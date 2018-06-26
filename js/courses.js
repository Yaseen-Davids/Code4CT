window.onscroll = function slideInCart() {
    if (window.scrollY > 300){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
    }
    else{
        $("#shopping_cart").css('right', '-85px', 'transition', 'all 0.4s');
    }
    if ($("#shopping_list").css('right') == "0px"){
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
    }
}

$("#shopping_cart").click(function(){
    if ($("#shopping_list").css('right') == "0px"){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '-305px', 'transition', 'all 0.4s');
    }
    else {
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
    }
})

$("button").click(function(){
    $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
    $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
})

// // jQuery functions for buttons to add and remove course values

// $(function(){
//     $("#add1").click(function(){
//       $("<h2 style='color:white;' id='button1'>Beginner JavaScript R1800</h2>").appendTo(".course1");
//     });
//   });
  
//   $(function(){
//     $('#remove1').click(function(){
//         $('#button1').remove();
//     });
//   });
  
//   $(function(){
//     $("#add2").click(function(){
//       $("<h2 style='color:white;' id='button2'>Beginner Front End Web Development R1800</h2>").appendTo(".course2");
//     });
//   });
  
//   $(function(){
//   $('#remove2').click(function(){
//       $('#button2').remove();
//   });
//   });
  
//   $("#add3").click(function(){
//     $("<h2 style='color:white;' id='button3'>Beginner Python R1800</h2>").appendTo(".course3");
//   });
  
//   $(function(){
//   $('#remove3').click(function(){
//       $('#button3').remove();
//   });
//   });
  
//   $("#add4").click(function(){
//     $("<h2 style='color:white;' id='button4'>Full Stack JavaScript R1800</h2>").appendTo(".course4");
//   });
  
//   $(function(){
//   $('#remove4').click(function(){
//       $('#button4').remove();
//   });
//   });
  
//   $("#add5").click(function(){
//     $("<h2 style='color:white;' id='button5'>Website Deployment R1200</h2>").appendTo(".course5");
//   });
  
//   $(function(){
//   $('#remove5').click(function(){
//       $('#button5').remove();
//   });
//   });
  
//   $("#add6").click(function(){
//     $("<h2 style='color:white;' id='button6'>Innovation Challenge R750</h2>").appendTo(".course6");
//   });
  
//   $(function(){
//   $('#remove6').click(function(){
//       $('#button6').remove();
//   });
//   });
  
//   $("#add7").click(function(){
//     $("<h2 style='color:white;' id='button7'>CodeStorm R1500</h2>").appendTo(".course7");
//   });
  
//   $(function(){
//   $('#remove7').click(function(){
//       $('#button7').remove();
//   });
//   });
  
//   $("#add8").click(function(){
//     $("<h2 style='color:white;' id='button8'>Hackathon TBC</h2>").appendTo(".course8");
//   });
  
//   $(function(){
//   $('#remove8').click(function(){
//       $('#button8').remove();
//   });
//   });
  
//   $("#add9").click(function(){
//     $("<h2 style='color:white;' id='button9'>Intro to Coding: Web Pages R250</h2>").appendTo(".course9");
//   });
  
//   $(function(){
//   $('#remove9').click(function(){
//       $('#button9').remove();
//   });
//   });
  
//   $("#add10").click(function(){
//     $("<h2 style='color:white;' id='button10'>Intro to Coding: Music R250</h2>").appendTo(".course10");
//   });
  
//   $(function(){
//     $('#remove10').click(function(){
//         $('#button10').remove();
//       });
//     });
  
//     $("#add11").click(function(){
//       $("<h2 style='color:white;' id='button11'>Intro to Coding: Animation R250</h2>").appendTo(".course11");
//     });
  
//     $(function(){
//       $('#remove11').click(function(){
//         $('#button11').remove();
//       });
//       });
  
//     $("#add12").click(function(){
//       $("<h2 style='color:white;' id='button12'>Getting started as a developer R250</h2>").appendTo(".course12");
//     });
  
//     $(function(){
//       $('#remove12').click(function(){
//         $('#button12').remove();
//       });
//     });
  
  
//    var total = 0;
//   // "#add1, #add2, #add3, #add4, #add5, #add6, #add7, #add8, #add9, #add10, #add11, #add12"
//    $(function(){
//      $("[id^=add]").click(function(){
//        total = Number(total) + Number($(this).val());
//        if(total < 0 ) {
//          $('#total').text("Total:R " + total);
//          // true
//        } else {
//          // console.log ('dont do anything');
//          $('#total').text("Total:R " + total);
//        }
//      });
//      // $('#total').text("Total:R " + total);
//    });
  
//    $(function(){
  
//      $("[id^=remove]").click(function(){
//        total = Number(total) - Number($(this).val());
//        if(total < 0 ) {
//          $('#total').text("Total:R " + total);
//          // true
//        } else {
//          // console.log ('dont do anything');
//          $('#total').text("Total:R " + total);
//        }
  
//      });
  
//    });
  