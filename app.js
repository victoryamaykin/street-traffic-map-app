/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap() {
  
  var mapCanvas = document.getElementById("map");
  var mapOptions =  {
    zoom: 13,
    center: { lat: 35.7915, lng: -78.7811 },
    mapTypeControl: true,
		mapTypeControlOptions: {
  		style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU,
  		position: google.maps.ControlPosition.TOP_LEFT
			}
  }
  
  const map = new google.maps.Map(mapCanvas, mapOptions);
  map.setMapTypeId(google.maps.MapTypeId.HYBRID);
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
  
  document
    .getElementById("toggle-weekly")
    .addEventListener("click", setWeekly);
    document
    .getElementById("toggle-monthly")
    .addEventListener("click", setMonthly);
    
   function setWeekly() {
   		var newScript = document.getElementById("data");
      newScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly";
location.reload();


   } 
   
   function setMonthly() {
   		var newScript = document.getElementById("data");
      newScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=monthly";
location.reload();


   } 
   
}

window.initMap = initMap;
