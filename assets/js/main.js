$(document).ready(function(){
    $(".modal-window-action").on("click", function(){
        var target = $(this).attr("href");
        $(target).closest(".modal-window-wrapper").fadeIn(200);
        return false;
    });
    $(".modal-window-close").on("click", function(){
        $(this).closest(".modal-window-wrapper").fadeOut(200);
    })
})