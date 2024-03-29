var marker, marker2, map = new AMap.Map('container', {
    zoom: 15,
    center: [120.743548, 31.258443]//new AMap.LngLat(116.39,39.9), 
});
// AMap.event.addDomListener(document.getElementById('addMarker'), 'click', function() {
//        addMarker();
//    }, false);
//    AMap.event.addDomListener(document.getElementById('updateMarker'), 'click', function() {
//        marker && updateMarker();
//    }, false);
// 实例化点标记
function addMarker() {
    if (marker) {
        return;
    }
    marker = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [120.738816, 31.258057]
    });

    marker.setMap(map);
}
addMarker();
function updateMarker() {
    // 自定义点标记内容
    var markerContent = document.createElement("div");

    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = "苏州纳米技术国家大学科技园E栋603";
    markerContent.appendChild(markerSpan);

    marker.setContent(markerContent); //更新点标记内容
    marker.setPosition([120.738816, 31.258057]); //更新点标记位置
}
updateMarker();




var marker3, map = new AMap.Map('containerBJ', {
    zoom: 15,
    center: [116.3066400, 39.9836200]
});
// 实例化点标记
function addMarker2() {
    if (marker3) {
        return;
    }
    marker3 = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [116.3066400, 39.9836200] 
    });

    marker3.setMap(map);
}
addMarker2();
function updateMarker2() {
    // 自定义点标记内容
    var markerContent = document.createElement("div");

    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png";
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = "北京市海淀区中关村创业大街2号楼3层";
    markerContent.appendChild(markerSpan);

    marker3.setContent(markerContent); //更新点标记内容
    marker3.setPosition([116.3066400, 39.9836200]); //更新点标记位置
}
updateMarker2();