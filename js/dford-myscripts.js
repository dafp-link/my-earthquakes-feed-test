var itemsArray=[];
var info='';
var mapLoaded=false;

$( document ).ready(function() {

 //open feed

 var output='';
 var url = 'http://www.seismi.org/api/eqs/';		  
 $.ajaxSetup({
   crossOrigin: true
 });		  
	  
 $.getJSON(url, function (data) {
  var items= JSON.parse(data);
  $(items.earthquakes).each(function() {
    output += "<p><strong>Location: </strong>" + this.region + "<br/><strong>Magnitude: </strong>" + this.magnitude + "<br/><strong>Time and date: </strong>" + this.timedate + "<br/><strong>Latitude: </strong>" + this.lat + "<br/><strong>Longitude: </strong>" + this.lon + "</p><hr>";
	var obj = {info: this.magnitude +", " + this.region, latitude: this.lat, longitude: this.lon};
    itemsArray.push(obj);
  });
  $('#list-container').html(output);
 });//$.getJSON
 
 
 //switch map and list icons	

 
 $("#map-button").click(function() {
    if(!mapLoaded)
	 {initializeMap();
	  mapLoaded=true;
	 }
 
	if (!$(this).hasClass("list-class"))
	{
	  $(this).addClass("list-class");
	  $('#list-container').hide();
	  $('#map-canvas').css('visibility','visible');
	  $('#button-text').html('See list');	  
	}
	else if ($(this).hasClass("list-class"))
	{
     $('#list-container').show();
	 $('#map-canvas').css('visibility','hidden');
	 $('#button-text').html('See map');
	 $(this).removeClass("list-class");
	} 
 }); //$("#map-button")
  
}); //document.ready

	  function initializeMap() {
        var mapOptions = {
          center: { lat: -28.573, lng: 135.999},
          zoom: 3
        };
       var map = new google.maps.Map(document.getElementById('map-canvas'),
       mapOptions);
	   var iconBase = 'imgs/';

	   var infowindow = new google.maps.InfoWindow();
	   
	   for (var i = 0; i < itemsArray.length; i++){
		 contentString='<b>'+itemsArray[i].info+'</b>';  
         markersArray = new google.maps.Marker({
		  position: new google.maps.LatLng(itemsArray[i].latitude,itemsArray[i].longitude),
          title:itemsArray[i].info,
		  icon: iconBase + 'earthquake-marker.png',
		  information:contentString,
		  map: map
         });
		 
		 google.maps.event.addListener(markersArray, 'click', function() {
          infowindow.setContent(this.information);
          infowindow.open(map, this);
         });
		 
       } //for
   
      }
/*
      function loadScript() {
       var script = document.createElement('script');
       script.type = 'text/javascript';
       script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initializeMap';
       document.body.appendChild(script);
      }
      window.onload = loadScript;
	  
*/
