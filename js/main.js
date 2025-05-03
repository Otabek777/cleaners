$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
    $("body").toggleClass("hide");
});
$(".header__navbar li a").click(function() {
    $(".header__burgir").removeClass("active");
    $(".header").removeClass("active");
    $("body").removeClass("hide");
});
$(".asked__btn").click(function() {
    $(this).toggleClass("active");
});
$(".open-modal").click(function() {
    $(".modal").addClass("active");
    $("body").addClass("hide");
});
$(".modal__close").click(function() {
    $(".modal").removeClass("active");
    $("body").removeClass("hide");
});

$(function(){
    $('.header__navbar li a').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    });
});

$(".services__block").click(function () {
    $(this).toggleClass("active");
});
$(".addmore__block").click(function () {
    $(this).toggleClass("active");
});

document.querySelectorAll('.counter').forEach(counter => {
    const input = counter.querySelector('input');
    const plus = counter.querySelector('.plus');
    const minus = counter.querySelector('.minus');

    plus.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
    });

    minus.addEventListener('click', () => {
        if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        }
    });
});