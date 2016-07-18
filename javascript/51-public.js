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