var main = function() {
    $('#button1').click(function(){
        $('#proba').fadeOut(3000);
        $('#proba1').fadeOut(2000);
        $('#proba2').fadeOut(1000);

    });

    $('#button2').click(function(){
        $('#proba').fadeIn(1000);
        $('#proba1').fadeIn(2000);
        $('#proba2').fadeIn(3000);


    });

};

$(document).ready(main);