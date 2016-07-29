//左侧
var a="a00",b="b00",c="c00",d="d00",e="e00";
var sqlUrl;
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
//
$(function(){
    $(".list-classify-item li a").click(function(){
        var dataS=$(this)[0].dataset.s;
        var ds=dataS.substr(0,1);
        var dd=dataS.substr(1);
        if(dd<10){
            dd="0"+dd;
        }
        switch (ds) {
            case "b":b="b"+dd;break;
            case "c":c="c"+dd;break;
            case "d":d="d"+dd;break;
            case "e":e="e"+dd;break;
        }
        sqlUrl=a+b+c+d+e;
        console.log(sqlUrl);
    })
})
//地图
$(document).ready(function() {
    var map = new BMap.Map("myMap");
    map.centerAndZoom(new BMap.Point(110.9584, 32.344451), 6);
    map.setCurrentCity("上海");
    map.enableScrollWheelZoom(true);
    // map.disableDragging();
    map.addControl(new BMap.NavigationControl());
    map.addEventListener("click", function (e) {
        // console.log(e.point.lng + ", " + e.point.lat);
    });
    function square(center,length,city,innerNum){
        this._center=center;
        this._length=length;
        this._city=city;
        this._innerNum=innerNum;
    };
    square.prototype=new BMap.Overlay();
    square.prototype.initialize=function(map){
        this._map=map;
        var city = this._city;
        var div=document.createElement("div");
        div.style.position="absolute";
        div.style.width=this._length+"px";
        div.style.height=this._length+"px";
        div.style.background="url(images/bubble.png)";
        div.style.backgroundSize="cover";
        div.style.borderRadius="50%";
        div.style.fontSize="12px";
        div.style.textAlign="center";
        div.style.color="white";
        div.style.padding="11px";
        div.className="inner-map";
        div.style.lineHeight=this._length+"px";
        div.innerHTML=this._city+"&nbsp;&nbsp;"+this._innerNum+"套";
        map.getPanes().markerPane.appendChild(div);
        div.addEventListener("mouseover", function () {
            this.style.background="url(images/bubble-hover.png)";
            this.style.zIndex=100;
        });
        div.addEventListener("mouseout", function () {
            this.style.background="url(images/bubble.png)";
            this.style.zIndex=0;
        });
        div.addEventListener("click", function () {
            // console.log(map.getBounds())
            if(city != ""){
                map.centerAndZoom(city,11);      // 用城市名设置地图中心点
            }
    
        })
        this._div=div;
        return div;
    };
    square.prototype.draw=function(){
        var position=this._map.pointToOverlayPixel(this._center);
        this._div.style.left=position.x-this._length/2+"px";
        this._div.style.top=position.y-this._length/2+"px";
    };   
    var mapArr = [
        [{area:'北京'},{lng:116.404,lat:39.915},{num:15},{a:"a00"}],
        [{area:'成都'},{lng:104.144,lat:30.588},{num:3},{a:"a01"}],
        [{area:'昆明'},{lng:102.845,lat:24.802},{num:2},{a:"a02"}],
        [{area:'郑州'},{lng:113.623,lat:34.718},{num:2},{a:"a03"}],
        [{area:'阜阳'},{lng:115.801,lat:32.886},{num:2},{a:"a04"}],
        [{area:'武汉'},{lng:114.373,lat:30.451},{num:1},{a:"a05"}],
        [{area:'长沙'},{lng:112.919,lat:28.276},{num:2},{a:"a06"}],
        [{area:'广州'},{lng:113.272,lat:23.147},{num:2},{a:"a07"}],
        [{area:'深圳'},{lng:114.043,lat:22.542},{num:1},{a:"a08"}],
        [{area:'汕头'},{lng:116.669,lat:23.371},{num:2},{a:"a09"}],
        [{area:'扬州'},{lng:119.456,lat:32.374},{num:1},{a:"a10"}],
        [{area:'苏州'},{lng:120.587,lat:31.298},{num:1},{a:"a11"}],
        [{area:'上海'},{lng:121.492,lat:31.912},{num:4},{a:"a12"}],
        
    ];
    function addOverlay(mapArr){
            var distarr=[];
            for (var i = 0; i < mapArr.length; i++) {
            var mySquare=new square(mapArr[i][1],80,mapArr[i][0].area,mapArr[i][2].num);            
            if(testInnerMap(mapArr[i][1]))
                {   
                    map.addOverlay(mySquare);
                    distarr.push(mapArr[i][3].a);
                }
            }
            a=distarr.join(",");
            sqlUrl=a+b+c+d+e;
            console.log(sqlUrl);
        }
    addOverlay(mapArr);      
    map.addEventListener("dragging", function(){
        addOverlay(mapArr);
    })
    // addOverlay(mapArr);
        if (map.getZoom()<6) {
            map.clearOverlays()
        };
    map.addEventListener("zoomend", function() {
            if (map.getZoom() < 6) {
                map.clearOverlays()
            }
            else{
                addOverlay(mapArr);
            }
        });
    function testInnerMap(obj){
        var bs = map.getBounds();   //获取可视区域
        var bssw = bs.getSouthWest();   //可视区域左下角
        var bsne = bs.getNorthEast();   //可视区域右上角   
        if(obj.lng<bsne.lng && obj.lng>bssw.lng && obj.lat<bsne.lat && obj.lat>bssw.lat){
            return true;
        }else{
            return false;
        }   
    }
})