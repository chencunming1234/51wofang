$(document).ready(function(){
    //     var imgWidth=$(document).width();
    //     $(".index-img-wrap img").width('100vw');
    //     console.log(imgWidth);
    //     console.log($(".index-img-wrap img").width())
    //     $(".index-img-foreach").width(imgWidth);
    //     $(".index-img-wrap").width($(".index-img-wrap img").width()*$(".index-img-wrap img").length);
    // $(window).resize(function(){
    //     var imgWidth=$(window).width();
    //     $(".index-img-wrap img").width(imgWidth);
    //     $(".index-img-wrap").width($(".index-img-wrap img").width()*$(".index-img-wrap img").length)
    // })
    // console.log(imgWidth);
    // console.log($(document).width());
    
})
$(function(){
    window.sessionStorage.setItem("token","1111");
    var mySwiper=new Swiper(".swiper-container",{
        loop:"true",
        autoplay:7000,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        pagination :'.swiper-pagination',
        paginationClickable :true,
    })
})