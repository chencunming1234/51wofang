$(function(){
    $(".list-classify-dist").click(function(){
        $(this).next().toggle();
    });
    $(".list-classify-item li a").click(function(){
        $(".list-classify-item li a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".list-classify-item").prev().html($(this).html());
        $(this).parents(".list-classify-item").hide();
    })
})