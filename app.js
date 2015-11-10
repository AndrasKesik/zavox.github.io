var main = function() {
    $('#proba').fadeOut(1000);
    $('#proba2').fadeOut(2000);
    $('#proba3').fadeOut(3000);
    $('#proba').fadeIn(3000);
    $('#proba2').fadeIn(2000);
    $('#proba3').fadeIn(1000);


    $.simpleWeather({
        location: 'Miskolc, 3531',
        woeid: '',
        unit: 'c',
        success: function(weather) {
            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
};

$(document).ready(main);