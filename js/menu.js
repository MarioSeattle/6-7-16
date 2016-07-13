/**
 * Created by Mgomez on 7/8/16.
 */

    $("button").click(function() {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");
    });

$("nav").click(function(){
    $(".content").toggleClass('show');
    $(".hamburger").toggleClass("focus");
});
