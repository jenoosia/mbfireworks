(function(jnz, $) {
    
    jnz.mapOpts = {
        //https://maps.google.com.sg/?ll=1.286644,103.857107&spn=0.008517,0.013915&t=m&z=17
        center: new google.maps.LatLng(1.286644,103.857107),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    jnz.map = null;
    jnz.markers = {};
    jnz.bargeMarker = {};
    
    function initMarkers(dataset) {
        jnz.bargeMarker = new google.maps.Marker({
            position: new google.maps.LatLng(1.286644,103.857107),
            map: jnz.map,
            title: 'Fireworks Barge Location',
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10 }
        });
        
        var tmpl = Handlebars.templates['viewInfo'];
        $.each(dataset, function(idx, data) {
            var iw = new google.maps.InfoWindow({
               content: tmpl(data)
            });
            var iconToUse = data.markAsSpecial ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data.lat, data.lng),
                map: jnz.map,
                title: data.viewTitle,
                icon: iconToUse
            });
            google.maps.event.addListener(marker, 'click', function() {
                iw.open(jnz.map,marker);
            });
            jnz.markers[data.id] = {
                data: data, iw: iw, marker: marker
            };
        });
    }
    
    jnz.init = function() {
        jnz.map = new google.maps.Map(document.getElementById('theMap'), jnz.mapOpts);
        initMarkers(jnz.ViewData);
    };
    
    $(document).ready(jnz.init);
    
})(window.jnz = window.jnz || {}, $);
