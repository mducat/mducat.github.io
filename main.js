$(document).ready(function(){
    $(".crop").animate({
        'margin-top': '+=120px',
        opacity: '+=1'
    }, 1500, function(){});

    $(".crop").promise().done(function(){
        $("h1").animate({
            opacity: '+=1'
        }, 500, function(){})
    })
});
