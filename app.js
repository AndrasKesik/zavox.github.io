var slide = function(){
    $("#img1").fadeIn(1000).delay(10500).fadeOut(1500); //13000
    $("#img2").delay(13000).fadeIn(1500).delay(11000).fadeOut(1500); //27000
    $("#img3").delay(27000).fadeIn(1500).delay(11000).fadeOut(1500); //41000
    $("#img4").delay(41000).fadeIn(1500).delay(11000).fadeOut(1500, slide); //55000
};

$(document).ready(slide);