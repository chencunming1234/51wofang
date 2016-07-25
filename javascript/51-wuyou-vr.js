$(document).ready(function(){
    $(".wuyou-slide-warp").append($(".wuyou-slide-warp").html())
    $(".wuyou-slide-warp").width($(".wuyou-slide-items").outerWidth(true)*$(".wuyou-slide-items").length)
    var speed=-1100;
    $(".wuyou-dist .wuyou-next").click(function(e){
        e.preventDefault();       
        if(speed<=-4400){
            speed-=550;
            $(".wuyou-slide-warp").css({"transition-duration":".5s","transform":"translate3d("+speed+"px,0,0)"})
            // setTimeout(function () {
            //     if(speed<=-4950){
            //     speed=-1100;
            //     $(".wuyou-slide-warp").css({"transition-duration":"0s","transform":"translate3d("+speed+"px,0,0)"})
            //     }
            // }, 500)
            $(".wuyou-slide-warp").on("webkitTransitionEnd transitionEnd",function(){
                if(speed<=-4950){
                    speed=-1100;
                    $(".wuyou-slide-warp").css({"transition-duration":"0s","transform":"translate3d("+speed+"px,0,0)"})
                }
            })
        }
        else {
            speed-=1100;
            $(".wuyou-slide-warp").css({"transition-duration":".5s","transform":"translate3d("+speed+"px,0,0)"})
        }     
    })
    $(".wuyou-dist .wuyou-prev").click(function(e){
        e.preventDefault();       
        if(speed>=-1100){
            speed+=550;
            $(".wuyou-slide-warp").css({"transition-duration":".5s","transform":"translate3d("+speed+"px,0,0)"})
            // setTimeout(function () {
            //     if(speed>=-550){
            //     speed=-4400;
            //     $(".wuyou-slide-warp").css({"transition-duration":"0s","transform":"translate3d("+speed+"px,0,0)"})
            //     }
            // }, 500)
             $(".wuyou-slide-warp").on("webkitTransitionEnd transitionEnd",function(){
                if(speed>=-550){
                speed=-4400;
                $(".wuyou-slide-warp").css({"transition-duration":"0s","transform":"translate3d("+speed+"px,0,0)"})
                }
             })
        }
        else {
            speed+=1100;
            $(".wuyou-slide-warp").css({"transition-duration":".5s","transform":"translate3d("+speed+"px,0,0)"})
        }     
    })

})