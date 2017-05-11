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
    zoom: zoom
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
    lat: 53.790639,
    lng: -1.532333
  }
}


/**
 * Standard Google Maps init function. Generates Maps.
 */
function initMap() {
  // Royal Canin Map + Marker
  var map_royal_canin = create_map( document.getElementById( 'map_royal_canin' ), key_locations.royal_canin, 17 );
  create_marker( key_locations.royal_canin, map_royal_canin );

  // First 10 Map + Marker
  var map_first_10 = create_map( document.getElementById( 'map_first_10' ), key_locations.first_10, 17 );
  create_marker( key_locations.first_10, map_first_10 );

}




/*

  MORNING!
  - MAP WITH OVERLAY
 */



