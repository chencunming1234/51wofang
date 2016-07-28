$(function(){
    // window.sessionStorage.setItem("token","1131");
})
$(function(){
    $("#login-phone").on("input",function(){
        var judgePhone=/^1[3|4|5|7|8]\d{9}$/g.test($("#login-phone").val())
        console.log(judgePhone);
        if(judgePhone==false){
            $(this).next().show().html("请输入正确的手机号");
        }
        else {
            $(this).next().hide();
        }
    });
    $("#login-phone").on("blur",function(){
        if($(this).val()==""){
            $(this).next().show().html("请输入您的手机号");
        }
    })
    $("#password").on("blur",function(){
        if($(this).val()==""){
            $(this).next().show().html("请输入您的密码");
        }
    })
    $(".show-password").mousedown(function(){
        // $(this).prevAll("#password").attr("type","text");
        var ps=document.getElementById("password");
        ps.setAttribute("type", "text");
    })
    $(".show-password").mouseup(function(){
        // $(this).prevAll("#password").attr("type","text");
        var ps=document.getElementById("password");
        ps.setAttribute("type", "password");
    })
    $("#check-code").blur(function(){
        if($(this).val()==""){
            $(this).next().show();
        }
        else {
            $(this).next().hide();    
        }
    })
})