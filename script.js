var main = function() {
  
    $('#navicon').click(function() {
        $('.nav').css({
            'transform': 'translateX(0)'
        });
    });

    $('.nav').click(function() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
    });

    $('#container').click(function() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
        _exit();
    });

    function _exit() {
        $('.nav').css({
            'transform': 'translateX(-200px)'
        });
    };

    google.maps.event.addDomListener(window, 'load', init);
    var map;

    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(40.3951, 49.8491),
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable: true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "color": "#fa8072"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#2a4d60"
                }, {
                    "visibility": "on"
                }]
            }],
        }
        var mapElement = document.getElementById('map-canvas');
        var map = new google.maps.Map(mapElement, mapOptions);
    }
    

};
$(document).ready(main);