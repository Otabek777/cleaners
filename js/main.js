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