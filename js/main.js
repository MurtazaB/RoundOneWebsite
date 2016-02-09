function scrollToElement(id) {
    element = document.getElementById(id);
    element.scrollIntoView(true);
}

$("#home-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
});

$("#judges-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#judges").offset().top
    }, 500);
});

$("#logistics-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#logistics").offset().top
    }, 500);
});

$("#apply-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#apply").offset().top
    }, 500);
});

$("#learnmore-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#judges").offset().top
    }, 500);
});