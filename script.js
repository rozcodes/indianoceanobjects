// CHANGE COLOR TO YELLOW
$(document).ready(function(yellow) {

	$(".tab").click(function(yellow) {
		$(".tab").removeClass("active");
		$(this).addClass("active");

	});
});

// DISPLAY CONTENT
function hide1() {
	$(".other1descr").css("display", "none")
}
function hide2() {
	$(".other2descr").css("display", "none")
}
function hide3() {
	$(".other3descr").css("display", "none")
}
function hide4() {
	$(".other4descr").css("display", "none")
}

function show() {
	$(".diseasebox").css("display", "inline-block");
	$(".disease-panel").css("display", "inline-block");

}

$("#tab2").click(function(dysentery) {
 		show();
 		hide2();
 	
});

$("#tab3").click(function(syphilis) {
 		show();
		hide3();
});

$("#tab4").click(function(womens) {
 		show();
 		hide4();
});

$("#tab1").click(function(cholera) {
 		show();
 		hide1();
});

//GALLERY

$(document).ready(function() {

  $(".dot").click(function(change1) {
      $(".dot").removeClass("activedot");
      $(this).addClass("activedot");
     });
  });
 
$(document).ready(function() {
    
$("#dot1").click(function(hideshow1) {
    $("#macenutmeg").show("medium");
    $("#negundo").show("medium");
    $("#galanga").show("medium");
        $("#mace").hide("medium");
        $("#arbortriste").hide("medium");
        $("#canela").hide("medium");

      });


  $("#dot2").click(function(hideshow3) {
    $("#negundo").show("medium");
    $("#galanga").show("medium");
    $("#mace").show("medium");
        $("#arbortriste").hide("medium");
        $("#canela").hide("medium");
        $("#macenutmeg").hide("medium");
      });
  });
 

  $("#dot3").click(function(hideshow1) {
    $("#galanga").show("medium");
    $("#mace").show("medium");
    $("#arbortriste").show("medium");
      $("#canela").hide("medium");
      $("#macenutmeg").hide("medium");
      $("#negundo").hide("medium");

      });


   $("#dot4").click(function(hideshow2) {
    $("#mace").show("medium");
    $("#arbortriste").show("medium");
    $("#canela").show("medium");
        $("#macenutmeg").hide("medium");
        $("#negundo").hide("medium");
        $("#galanga").hide("medium");

      });


// LIGHTBOX

 

$(document).ready(function(){

  $("#macenutmeg").click(function(big) {
         $(".macen").removeClass("hidebox");
  });

    $("#negundo").click(function(big) {
         $(".negundof").removeClass("hidebox");
  });

    $("#galanga").click(function(big) {
         $(".galanga").removeClass("hidebox");
  });

    $("#mace").click(function(big) {
         $(".mace").removeClass("hidebox");
  });

    $("#arbortriste").click(function(big) {
         $(".arbor").removeClass("hidebox");
  });

    $("#canela").click(function(big) {
         $(".canela").removeClass("hidebox");
  });

});

$(document).ready(function() {
  $(".lightbox").click(function(thumbnail) {
    $(".lightbox").addClass("hidebox");
   });
});


 
 
