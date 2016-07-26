var canvas=document.getElementsByTagName("canvas")[0],ctx=canvas.getContext("2d"),
    mousePosition={
    x:300,
    y:300
},dots=[];
window.onload=function(){ 
    //随机位置

    canvas.onmousemove=function (e) {
        var ev=e||window.event;
        mousePosition.x=ev.pageX;
        mousePosition.y=ev.pageY-65;
    }
    setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        var len=dots.length;
        for(var i=0;i<len;i++){
            dots[i].move();
            for(var j=i+1;j<len;j++){
                if(getDistance(dots[i],dots[j])<180&&getDistance(dots[i],mousePosition)<180&&getDistance(dots[j],mousePosition)<180){
                    drawLine(dots[i],dots[j]);
                }
            }
        dots[i].drawDot();
        }
    }, 30) 
}
    //构造函数
    function Dot(x,y,vx,vy,dotColor,lineColor){
        this.x=x;
        this.y=y;
        this.vx=vy;
        this.vy=vy;
        this.dotColor=dotColor;
        this.lineColor=dotColor;
    }
    function createdDots(dotColor,lineColor){
        var x=Math.random()*canvas.width;
        var y=Math.random()*canvas.height;
        var vx=Math.random()*2-1;
        var vy=Math.random()>0.5?Math.sqrt(1-vx*vx):-Math.sqrt(1-vx*vx);
        return dot =new Dot(x,y,vx,vy,dotColor,lineColor);
    }
    Dot.prototype.drawDot=function () {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.dotColor;
        ctx.arc(this.x,this.y,1,0,Math.PI*2,false);
        ctx.fill();
        ctx.restore();
    }
    Dot.prototype.move=function () {
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x<=5){
            this.vx=-this.vx;
        }
        if(this.x>canvas.width-5){
            this.vx=-this.vx;
        }
        if(this.y<=5){
            this.vy=-this.vy;
        }
        if(this.y>canvas.height-5){
            this.vy=-this.vy;
        }
    }
    for(var i=0;i<250;i++){
        dots.push(createdDots(getColor(),getColor()));
    }
    //随机颜色
    function getColor(){
        var r=parseInt(Math.random()*255);
        var g=parseInt(Math.random()*255);
        var b=parseInt(Math.random()*255);
        var a=Math.random()+.4;

        return "rgba("+r+","+g+","+b+","+a+")";
    }
    function getDistance(dot1,dot2) {
        return parseInt(Math.sqrt((dot1.x-dot2.x)*(dot1.x-dot2.x)+(dot1.y-dot2.y)*(dot1.y-dot2.y)))
    }
    function drawLine(dot1,dot2) {
        ctx.beginPath();
        ctx.strokeStyle = dot1.lineColor;
        ctx.lineWidth =.2;
        ctx.moveTo(dot1.x,dot1.y);
        ctx.lineTo(dot2.x,dot2.y);
        ctx.stroke();
    }
//     function drawLine(){
//     var dot1;
//     var dot2;
//     for (var i = 0; i < dots.length; i++) {
//         dot1 = dots[i];
//         for(var j = i+1; j< dots.length; j++){
//             dot2= dots[j];
//             if(getDistance(dot1,dot2)<200 && getDistance(dot1,mousePosition)<200 && getDistance(dot2,mousePosition)<200 ){
//                 ctx.beginPath();
//                 ctx.strokeStyle = dot1.lineColor;
//                 ctx.lineWidth = 0.2;
//                 ctx.moveTo(dot1.x,dot1.y);
//                 ctx.lineTo(dot2.x,dot2.y);
//                 ctx.stroke();
//             }
//         }
//         dot1.drawDot();
//     }
// }

