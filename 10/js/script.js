$(document).ready(function () {
    $('.burger').click(function(){
        $('.burger span').toggleClass('active');
        if (!$(this).hasClass('clicked')) {
            $(this).addClass('clicked');
            $(".burger-menu").css("visibility", "visible");
        } else {
            $(this).removeClass('clicked');
            $(".burger-menu").css("visibility", "hidden");
        }
    })
});