$(function() {
    if ($(document).width() < 767) {
            $(".list-classify-dist").click(function() {
                $(this).next().toggle();
            });
            $(".list-classify-item li a").click(function() {
                $(".list-classify-item li a").removeClass("active");
                $(this).addClass("active");
                $(this).parents(".list-classify-item").prev().html($(this).html());
                $(this).parents(".list-classify-item").hide();
            })
        }   
    $(window).resize(function() {
        if ($(document).width() < 766) {
            $(".list-classify-dist").click(function() {
                $(this).next().toggle();
            });
            $(".list-classify-item li a").click(function() {
                $(".list-classify-item li a").removeClass("active");
                $(this).addClass("active");
                $(this).parents(".list-classify-item").prev().html($(this).html());
                $(this).parents(".list-classify-item").hide();
            })
        }
    })    
})

$(function(){

})
$(function(){



    var a="a0",b="b0",c="c0",d="d0",e="e0";
    $(".list-classify-item li a").click(function(){
        $(".list-classify-item li a").removeClass("active");
        $(this).addClass("active");
        var dataS=$(this)[0].dataset.s;
        var ds=dataS.substr(0,1);
        var dd=dataS.substr(1);
        switch (ds) {
            case "a":a="a"+dd;break;
            case "b":b="b"+dd;break;
            case "c":c="c"+dd;break;
            case "d":d="d"+dd;break;
            case "e":e="e"+dd;break;
        }
        var sqlUrl=a+b+c+d+e;
        console.log(sqlUrl);      
        // $(this).parents(".list-classify-item").prev().html($(this).html());
        // $(this).parents(".list-classify-item").hide();
    })
})

