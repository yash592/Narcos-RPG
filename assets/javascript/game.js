$(document).ready(function () {

	

	var pabloattack;
	var carilloattack;
	var pachoattack;
	var donbernaattach;

	var attackvalues = [120, 140, 160, 180];

	for (var i = 0; i < 1; i++) {

    var pablo = $("<img>");
    var carillo = $("<img>");
    var pacho = $("<img>");
    var donberna = $("<img>");

    pablo.addClass("narcoone");
    carillo.addClass("narcotwo");
    pacho.addClass("narcothree");
    donberna.addClass("narcofour");

    var pablorpg = $("<img>");
    var pachorpg = $("<img>");

    pablorpg.attr("src", "assets/images/pablo.png");
    pachorpg.attr("src", "assets/images/pena.png");

    pablo.attr("src", "http://img.sharetv.com/shows/characters/large/narcos.pablo_escobar.jpg");
    carillo.attr("src", "http://img.sharetv.com/shows/characters/large/narcos.horatio_carrillo.jpg");
    pacho.attr("src", "http://img.sharetv.com/shows/characters/large/narcos.javier_pea.jpg");
    donberna.attr("src", "http://img.sharetv.com/shows/characters/large/narcos.steve_murphy.jpg");

    pablo.attr("attackpoints", attackvalues[0]);
    carillo.attr("attackpoints", attackvalues[1]);
    pacho.attr("attackpoints", attackvalues[2]);
    donberna.attr("attackpoints", attackvalues[3]);

    $("#characters").append(pablo);
    $("#characters").append(carillo);
    $("#characters").append(pacho);
    $("#characters").append(donberna);

    // $("#characterpoints").append(attackvalues[0]);

    // $("#characterpoints").append(attackvalues[1]);

    // $("#characterpoints").append(attackvalues[2]);

    // $("#characterpoints").append(attackvalues[3]);

    


	}

// setup onclick functions to pick up characters
// move characters 

$(".narcoone").on("click", function() {
	$(".narcoone").fadeOut();
	$(".opponentone").append(pablorpg);
});

$(".narcothree").on("click", function() {
	$(".narcothree").fadeOut();
	$(".opponenttwo").append(pachorpg);
});

$("#fight").on("click", function(){
	
})





    
$(".narcotwo").on("click", function() {
	alert("Carillo not availabe. Died a gruesome death");
});
    
$(".narcofour").on("click", function() {
	alert("Murphy out doing hookers");
});
    
    


})