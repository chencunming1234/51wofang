//左侧
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
//地图
$(document).ready(function() {
    var map = new BMap.Map("myMap");
    map.centerAndZoom(new BMap.Point(110.9584, 32.344451), 6);
    map.setCurrentCity("上海");
    map.enableScrollWheelZoom(true);
    // map.disableDragging();
    map.addControl(new BMap.NavigationControl());
    map.addEventListener("click", function (e) {
        console.log(e.point.lng + ", " + e.point.lat);
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
            console.log(map.getBounds())
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
        [{area:'北京'},{lng:116.404,lat:39.915},{num:15}],
        [{area:'成都'},{lng:104.144,lat:30.588},{num:3}],
        [{area:'昆明'},{lng:102.845,lat:24.802},{num:2}],
        [{area:'郑州'},{lng:113.623,lat:34.718},{num:2}],
        [{area:'阜阳'},{lng:115.801,lat:32.886},{num:2}],
        [{area:'武汉'},{lng:114.373,lat:30.451},{num:1}],
        [{area:'长沙'},{lng:112.919,lat:28.276},{num:2}],
        [{area:'广州'},{lng:113.272,lat:23.147},{num:2}],
        [{area:'深圳'},{lng:114.043,lat:22.542},{num:1}],
        [{area:'汕头'},{lng:116.669,lat:23.371},{num:2}],
        [{area:'扬州'},{lng:119.456,lat:32.374},{num:1}],
        [{area:'苏州'},{lng:120.587,lat:31.298},{num:1}],
        [{area:'上海'},{lng:121.492,lat:31.912},{num:4}],
        
    ];
    function addOverlay(mapArr){
            for (var i = 0; i < mapArr.length; i++) {
            var mySquare=new square(mapArr[i][1],80,mapArr[i][0].area,mapArr[i][2].num);
            map.addOverlay(mySquare);
            }
        }
    addOverlay(mapArr);
        if (map.getZoom()<6) {
            map.clearOverlays()
        };
    map.addEventListener("zoomend", function() {
            if (map.getZoom() < 6) {
                map.clearOverlays()
            }
            else{
                addOverlay(mapArr)
            }
        });
})