(function(jnz, $) {
    
    jnz.init = function() {
        var listHtml = '';
        var tmpl = Handlebars.templates['viewInfoListItem'];
        $.each(jnz.ViewData, function(idx, data) {
            data.staticUrl = 'http://maps.googleapis.com/maps/api/staticmap?center=' + data.lat +',' + data.lng + 
                '&zoom=17&size=300x200&key=AIzaSyBlXVoez19pjdUz16OVXpjt_KAqaDpTVE8&sensor=false&markers=color:blue%7C' +
                data.lat + ',' + data.lng;
            listHtml += tmpl(data);
        });
        $('#theList').html(listHtml);
    };
    
    $(document).ready(jnz.init);
    
})(window.jnz = window.jnz || {}, $);
