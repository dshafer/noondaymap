(function($, countries){
  var markerStyle = {
    width: 40,
    height: 40
  };

  var noonday_markers = countries.map(function(c){
    return {
      latLng: c.latlng,
      image: 'img/check.png',
      style: markerStyle
    };
  });

  var onMarkerClick = function(idx){
    
  };

  $().ready(function(){
    $('#map').vectorMap({
      map: 'world_mill_en',
      markers: noonday_markers
    });  
  });
})(jQuery, noonday_countries);
