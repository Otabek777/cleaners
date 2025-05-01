$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
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

function initTabs(containerSelector) {
    $(containerSelector).each(function () {
        const $container = $(this);

        $container.find('.tabBtn').on("click", function () {
            const target = $(this).data("target");

            $container.find('.tabBtn').removeClass("active");
            $container.find('.tabBlock').removeClass("active");

            $(this).addClass("active");
            $container.find("#" + target).addClass("active");
        });
    });
}
initTabs('.tabContainer');

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