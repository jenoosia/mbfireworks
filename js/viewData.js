(function(jnz, $) {
    
    jnz.ViewObj = function(id, lat, lng, url, viewTitle, viewImage, markAsSpecial) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.url = url;
        this.viewTitle = viewTitle;
        this.viewImage = viewImage;
        this.markAsSpecial = markAsSpecial;
        this.viewDesc = '';
        this.staticUrl = '';
    };
    
    jnz.ViewData = [];
    (function initViewData() {
        jnz.ViewData.push(new jnz.ViewObj('espRoof1', 1.289733, 103.856088, 'https://maps.google.com.sg/?ll=1.289733,103.856088&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Roofdeck', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4771.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('espRoof2', 1.28969, 103.855927, 'https://maps.google.com.sg/?ll=1.28969,103.855927&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Roofdeck', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4777.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('espRoof3', 1.289444, 103.855852, 'https://maps.google.com.sg/?ll=1.289444,103.855852&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Roofdeck', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4782.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('espOut1', 1.288736, 103.856077, 'https://maps.google.com.sg/?ll=1.288736,103.856077&spn=0.008517,0.013915&t=m&z=17',
            'South of Outdoor Theater, On Steps', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4790.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('espOut2', 1.28895, 103.855745, 'https://maps.google.com.sg/?ll=1.28895,103.855745&spn=0.008517,0.013915&t=m&z=17',
            'West of Outdoor Theater', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4794.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('espFront1', 1.288993, 103.855273, 'https://maps.google.com.sg/?ll=1.288993,103.855273&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Bayfront - West', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4798.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('espFront2', 1.28895, 103.854672, 'https://maps.google.com.sg/?ll=1.28895,103.854672&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Bayfront - West', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4803.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('espDrive1', 1.288038, 103.854296, 'https://maps.google.com.sg/?ll=1.288038,103.854296&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Drive - Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4821.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('espDrive2', 1.287749, 103.854243, 'https://maps.google.com.sg/?ll=1.287749,103.854243&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Drive - Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4823.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('espDrive3', 1.287191, 103.854125, 'https://maps.google.com.sg/?ll=1.287191,103.854125&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Drive - Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4834.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('merlion1', 1.287009, 103.854522, 'https://maps.google.com.sg/?ll=1.287009,103.854522&spn=0.008517,0.013915&t=m&z=17',
            'Merlion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4836.jpg', true));
        
        jnz.ViewData.push(new jnz.ViewObj('full1', 1.286537, 103.854564, 'https://maps.google.com.sg/?ll=1.286537,103.854564&spn=0.008517,0.013915&t=m&z=17',
            'One Fullerton', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4839.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('full2', 1.285958, 103.854339, 'https://maps.google.com.sg/?ll=1.285958,103.854339&spn=0.008517,0.013915&t=m&z=17',
            'One Fullerton', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4842.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('full3', 1.285078, 103.853953, 'https://maps.google.com.sg/?ll=1.285078,103.853953&spn=0.008517,0.013915&t=m&z=17',
            'One Fullerton', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4853.jpg', true));
            
        jnz.ViewData.push(new jnz.ViewObj('pavi1', 1.284917, 103.853835, 'https://maps.google.com.sg/?ll=1.284917,103.853835&spn=0.008517,0.013915&t=m&z=17',
            'Beside Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4855.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('pavi2', 1.284628, 103.854017, 'https://maps.google.com.sg/?ll=1.284628,103.854017&spn=0.008517,0.013915&t=m&z=17',
            'Top of Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4859.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('pavi3', 1.284477, 103.853663, 'https://maps.google.com.sg/?ll=1.284477,103.853663&spn=0.008517,0.013915&t=m&z=17',
            'West of Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4867.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('pavi4', 1.28437, 103.853652, 'https://maps.google.com.sg/?ll=1.28437,103.853652&spn=0.008517,0.013915&t=m&z=17',
            'West of Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4869.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('pavi5', 1.284306, 103.85361, 'https://maps.google.com.sg/?ll=1.284306,103.85361&spn=0.008517,0.013915&t=m&z=17',
            'West of Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4872.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('pavi6', 1.284102, 103.853674, 'https://maps.google.com.sg/?ll=1.284102,103.853674&spn=0.008517,0.013915&t=m&z=17',
            'West of Fullerton Pavilion', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4877.jpg', true));
            
        jnz.ViewData.push(new jnz.ViewObj('fullbayhotel1', 1.283448, 103.853931, 'https://maps.google.com.sg/?ll=1.283448,103.853931&spn=0.008517,0.013915&t=m&z=17',
            'South of Fullerton Bay Hotel', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4886.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('prom1', 1.281731, 103.853577, 'https://maps.google.com.sg/?ll=1.281731,103.853577&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4888.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('prom2', 1.282118, 103.85377, 'https://maps.google.com.sg/?ll=1.282118,103.85377&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4890.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('prom3', 1.282096, 103.854167, 'https://maps.google.com.sg/?ll=1.282096,103.854167&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4896.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('prom4', 1.28215, 103.854446, 'https://maps.google.com.sg/?ll=1.28215,103.854446&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4898.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('prom5', 1.281807, 103.854629, 'https://maps.google.com.sg/?ll=1.281807,103.854629&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4906.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('prom6', 1.280873, 103.854715, 'https://maps.google.com.sg/?ll=1.280873,103.854715&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4914.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('prom7', 1.280455, 103.855433, 'https://maps.google.com.sg/?ll=1.280455,103.855433&spn=0.008517,0.013915&t=m&z=17',
            'Promontory at Marina Bay', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4933.jpg'));
        
        jnz.ViewData.push(new jnz.ViewObj('shop1', 1.280326, 103.855927, 'https://maps.google.com.sg/?ll=1.280326,103.855927&spn=0.008517,0.013915&t=m&z=17',
            'South of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4934.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('shop2', 1.280723, 103.856131, 'https://maps.google.com.sg/?ll=1.280723,103.856131&spn=0.008517,0.013915&t=m&z=17',
            'South of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4937.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('shop3', 1.281667, 103.856721, 'https://maps.google.com.sg/?ll=1.281667,103.856721&spn=0.008517,0.013915&t=m&z=17',
            'West of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4945.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('shop4', 1.282879, 103.857386, 'https://maps.google.com.sg/?ll=1.282879,103.857386&spn=0.008517,0.013915&t=m&z=17',
            'West of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4950.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('shop5', 1.283255, 103.857837, 'https://maps.google.com.sg/?ll=1.283255,103.857837&spn=0.008517,0.013915&t=m&z=17',
            'West of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4952.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('shop6', 1.284166, 103.85818, 'https://maps.google.com.sg/?ll=1.284166,103.85818&spn=0.008517,0.013915&t=m&z=17',
            'West of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4960.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('shop7', 1.284703, 103.858588, 'https://maps.google.com.sg/?ll=1.284703,103.858588&spn=0.008517,0.013915&t=m&z=17',
            'West of Shoppes @ Marina Bay Sands', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4969.jpg', true));
            
        jnz.ViewData.push(new jnz.ViewObj('as1', 1.286108, 103.858749, 'https://maps.google.com.sg/?ll=1.286108,103.858749&spn=0.008517,0.013915&t=m&z=17',
            'Art Science Museum Nearby', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4972.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('as2', 1.286086, 103.859382, 'https://maps.google.com.sg/?ll=1.286086,103.859382&spn=0.008517,0.013915&t=m&z=17',
            'Art Science Museum Nearby', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4981.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('as3', 1.286794, 103.859199, 'https://maps.google.com.sg/?ll=1.286794,103.859199&spn=0.008517,0.013915&t=m&z=17',
            'Art Science Museum Nearby', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4989.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('helix1', 1.287202, 103.860615, 'https://maps.google.com.sg/?ll=1.287202,103.860615&spn=0.008517,0.013915&t=m&z=17',
            'Helix Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4997.jpg'));
        jnz.ViewData.push(new jnz.ViewObj('helix2', 1.287631, 103.860637, 'https://maps.google.com.sg/?ll=1.287631,103.860637&spn=0.008517,0.013915&t=m&z=17',
            'Helix Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_4998.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('helix3', 1.288317, 103.86054, 'https://maps.google.com.sg/?ll=1.288317,103.86054&spn=0.008517,0.013915&t=m&z=17',
            'Helix Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5002.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('helix4', 1.288457, 103.860476, 'https://maps.google.com.sg/?ll=1.288457,103.860476&spn=0.008517,0.013915&t=m&z=17',
            'Helix Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5004.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('stage1', 1.288736, 103.860294, 'https://maps.google.com.sg/?ll=1.288736,103.860294&spn=0.008517,0.013915&t=m&z=17',
            'Near NDP Main Stage', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5007.jpg'));
            
        jnz.ViewData.push(new jnz.ViewObj('espFront3', 1.288875, 103.857719, 'https://maps.google.com.sg/?ll=1.288875,103.857719&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Bayfront - East', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5010.jpg', true));
        jnz.ViewData.push(new jnz.ViewObj('espFront4', 1.288918, 103.857064, 'https://maps.google.com.sg/?ll=1.288918,103.857064&spn=0.008517,0.013915&t=m&z=17',
            'Esplanade Bayfront - East', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5015.jpg', true));
            
        jnz.ViewData.push(new jnz.ViewObj('bridgeBack', 1.2888, 103.854082, 'https://maps.google.com.sg/?ll=1.2888,103.854082&spn=0.008517,0.013915&t=m&z=17',
            'Other Side of Esplanade Drive Bridge', 'https://dl.dropboxusercontent.com/u/8881257/mb-fw-scout/DSC_5026.jpg'));
    })();
    
})(window.jnz = window.jnz || {}, $);
