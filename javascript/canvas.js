var canvas=document.getElementsByTagName("canvas")[0],ctx=canvas.getContext("2d"),
    mousePosition={
    x:0,
    y:0
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
        for(var i=0;i<1000;i++){
        dots[i].move();             
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
        ctx.arc(this.x,this.y,10,0,Math.PI*2,false);
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
    for(var i=0;i<1000;i++){
        dots.push(createdDots(getColor(),getColor()));
    }
    //随机颜色
    function getColor(){
        var r=parseInt(Math.random()*255);
        var g=parseInt(Math.random()*255);
        var b=parseInt(Math.random()*255);
        var a=parseInt(Math.random()+0.4);

        return "rgba("+r+","+g+","+b+","+a+")";
    }
    function getDistance(dot1,dot2) {
        return parseInt(Math.sqrt((dot1.x-dot2.x)*(dot1.x-dot2.x)+(dot1.y-dot2.y)*(dot1.y-dot2.y)))
    }


