import React, { useEffect } from 'react'

const { kakao } = window;

const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.14656855941232, 126.92220584707904),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.14656855941232, 126.92220584707904); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{marginLeft:"10px", marginTop:"80px", width:"500px", height:"400px" }}></div>
        </div>
    )
}

export default Location;