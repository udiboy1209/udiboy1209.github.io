$(document).ready(function(){
    $(".menu_button").click(function(){

        $("#content_drawer").animate({height:"550px"},2000);
        $(this).animate({top:"550px"},2000);
    });
});

