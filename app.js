var main = function() {
    $('#button1').click(function(){
        $('#proba').fadeTo('slow',0);
        $('#proba1').fadeTo('normal',0);
        $('#proba2').fadeTo('fast',0);

    });

    $('#button2').click(function(){
        $('#proba').fadeTo('fast',1);
        $('#proba1').fadeTo('normal',1);
        $('#proba2').fadeTo('slow',1);


    });

};

$(document).ready(main);