$(document).ready(function() {
  $("#my-menu").mmenu({
        "navbar":{
            "title":"我要我房"
        },
  });
});
$(document).ready(function () {
    $("#menu-mark").on("click",function(){
        $(this).toggleClass("is-active");
    });
    $("#mm-blocker").on("click",function () {
        $("#menu-mark").toggleClass("is-active");
    })
})
$(function(){

    var judge=window.sessionStorage.getItem("token");
    if(judge){
        $(".regist").hide();
        $(".login").hide();
        $(".person-ctrl").show();
        $(".signout").show();
    }
    $(".signout").click(function(){
        window.sessionStorage.removeItem('token');
        $(".regist").show();
        $(".login").show();
        $(".person-ctrl").hide();
        $(".signout").hide();
    })
})  