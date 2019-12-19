$(function() {
    $('ul').children().slice(1, -2).css('background-color', 'salmon');
    $('ul').children().first().has('b').css('background-color', 'voilet');
    $('ul').children().last().has('em').css('background-color', 'lime');


    $('ul').click(function( event ) {
        var target = $(event.target);

        if (target.is('b')) {
            target.css('background-color', 'red');
        }
    });
});
