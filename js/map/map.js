
$(document).ready(function(){
    $(function() {
        $('#bh-sl-map-container').storeLocator({
        	'defaultLoc': true,
        	'defaultLat' : '37.431330',
			'defaultLng': '-122.101154',
            'autoGeocode' : true,
            'autoComplete': true,
            'dataType'    : 'json',
            'dataLocation': 'controller/content.php'
        });
    });
});