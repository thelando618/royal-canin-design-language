/**
 *
 * File maps.js.
 *
 */


/**
 * Custom Map icon SVG settings
 * @type {object}
 */
var icon = {
  path: 'M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 57C18.2 57 7 45.8 7 32S18.2 7 32 7s25 11.2 25 25-11.2 25-25 25zm11.5-25c0 6.4-5.1 11.5-11.5 11.5S20.5 38.4 20.5 32 25.6 20.5 32 20.5 43.5 25.6 43.5 32z',
  fillColor: '#E2001A',
  fillOpacity: .6,
  scale: .5,
  strokeWeight: 0
}

/**
 * Creates a Google Map
 * @param  {object} selector The DOM ID to set up the Map in
 * @param  {object} center   The desired center of the Map
 * @param  {number} zoom     The zoom level of the Map
 * @return {object}          The Map
 */
function create_map ( selector, center, zoom ) {
  /**
   * Sets default number for zoom
   * @type {number}
   */
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 17;

  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( null === selector || typeof center === 'undefined' || typeof zoom === 'undefined' ) {
    return false;
  }

  /**
   * Creates the new map with arguments passed and some defaults
   * @type {google}
   */
  var new_map = new google.maps.Map( selector, {
    center: center,
    scrollwheel: false,
    zoom: zoom,
    // Apple Maps style
    styles: [
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "color": "#faf5ed"
          },
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#bae5a6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "weight": "1.00"
          },
          {
            "gamma": "1.8"
          },
          {
            "saturation": "0"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#ffb200"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#b000ff"
          },
          {
            "saturation": "23"
          },
          {
            "lightness": "-4"
          },
          {
            "gamma": "0.80"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#a0daf2"
          }
        ]
      }
    ]
  } );

  return new_map;
}

/**
 * Create a Google Maps Marker
 * @param  {object}   position  The desired position of the Marker
 * @param  {object}   map       The Map to apply the Marker to      
 * @return {object}             The Marker applied to the Map
 */
function create_marker ( position, map ) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( typeof position === 'undefined' || typeof map === 'undefined', false === map ) {
    return false;
  }

  /**
   * Creates the new map marker with arguments passed
   * @type {google}
   */
  var map_marker = new google.maps.Marker({
    icon: icon,
    position: position,
    map: map
  });

  return map_marker;
}

/**
 * Create a Google Maps Marker
 * @param  {object} content The content for the InfoWindow
 * @param  {object} marker  The Marker to attach the InfoWindow to
 * @param  {object} map     The Map that the Marker is applied to
 * @return {object}         The InfoWindow applied to the Marker
 */
function create_infobox ( content, marker, map ) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( typeof content === 'undefined' || typeof marker === 'undefined' || typeof map === 'undefined' ) {
    return false;
  }

  var new_infowindow = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener( 'click', function() {    
    new_infowindow.open( map, marker );

    make_visible = 'rc-map__overlay--visible';

    // Add class
    if ( new_infowindow.content.classList )
      new_infowindow.content.classList.add( make_visible );
    else
      new_infowindow.content.make_visible += ' ' + make_visible;
  } );

  return new_infowindow;
}





// 
// Following would live in custom scripts file
// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 

/**
 * Object containing lat/lng of key locations
 * @type {object}
 */
var key_locations = {
  royal_canin: {
    lat: 43.700753,
    lng: 4.187961
  },
  first_10: {
    lat: 53.790524,
    lng: -1.532349
  }
}


/**
 * Standard Google Maps init function. Generates Maps.
 */
function initMap() {

  if (document.getElementById( 'map_royal_canin' ) !== null) {
    // Royal Canin Map
    var map_royal_canin = create_map(document.getElementById('map_royal_canin'), key_locations.royal_canin, 17);

    // Royal Canin Map + Marker
    var map_royal_canin_marker = create_map(document.getElementById('map_royal_canin--marker'), key_locations.royal_canin, 17);
    var marker_royal_canin_marker = create_marker(key_locations.royal_canin, map_royal_canin_marker);

    // First 10 Map + Marker + Infobox
    var map_first_10 = create_map(document.getElementById('map_first_10'), key_locations.first_10, 18);
    var marker_first_10 = create_marker(key_locations.first_10, map_first_10);
    var infobox_first_10 = create_infobox(document.getElementById('infobox_first_10'), marker_first_10, map_first_10);
  }
}

