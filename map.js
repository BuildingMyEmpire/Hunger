var map = L.map('map',{
  center: [40.73, 360-74.07],
  zoom: 12
  });

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var locations = [
      ["The Sharing Place Food Pantry:<p>440 Hoboken City, Jersey City, New Jersey, 07306</p>", 40.73, 360-74.07],
      ["The Mary House Emergency Food Pantry of OLS:<p>95 Clerk St, Jersey City, NJ 07305</p>", 40.707213, 360-74.076559],
      ["Palisades Emergency Residence Corporation (PERC):<p>111 37th Street, Union City, NJ 07087</p>", 40.77, 360-74.03],
      ["St. Joseph & Michael Food Pantry:<p>1501 New York Ave, Union CIty 07087</p>", 40.761384, 360-74.035241],
      ["North Hudson Community Action Corporation/WIC:<p>645 Kearny Avenue, Kearny NJ 07032</p>", 40.772944, 360-74.143995],
      ["North Hudson Community Action Corporation/WIC:<p>326 Harrison Avenue, Harrison NJ 07029</p>", 40.746583, 360-74.1568],
      ["North Hudson Community Action Corporation/WIC:<p>407 39th Street, Union City NJ 07087<p>", 40.797239, 360-74.012143],
      ["NHCAC:Emergency Solutions:<p>7007 Polk Street, Guttenberg, NJ 07093</p>",40.739791, 360-74.04677],
      ["Hunger Helpers:<p>619 Grove Street, Jersey City, NJ 07310</p>", 40.739791, 360-74.04677],
      ["The Salvation Army Kearny Corps:<p>28 Beech Street, Kearny, NJ 07032</p>", 40.766916, 360-74.146635],
      ["The Salvation Army Jersey City Corps:<p>562 Bergen Avenue, Jersey City, NJ 07304</p>", 40.708328, 360-74.087328],
      ["The Beacon at Bethany Lutheran Church:<p>2015 John F. Kennedy Blvd. Jersey City, NJ 07305</p>", 40.732661, 360-74.04137],
      ["The Hoboken Shelter:<p>300 Bloomfield St, Hoboken, NJ 07030</p>", 40.74032, 360-74.031139],
      ["St. John's Soup Kitchen:<p>155 North Street, Jersey City, NJ 07307</p>", 40.753079, 360-74.048066]
    ]

    var markerIcon = L.icon({
        iconUrl: 'map-marker-icon.png', //replace with src of image in folder
        iconSize: [38, 42], // size of the icon
        });

    for(var i=0; i < locations.length; i++){
          var marker = L.marker([locations[i][1], locations[i][2]], {icon: markerIcon}).bindPopup(locations[i][0] ).addTo(map);
        }



    //
    // var marker = L.marker([40.707213, 360-74.076559], {icon: markerIcon}).bindPopup('The Mary House Emergency Food Pantry of OLS').addTo(map);
    // var marker = L.marker([40.77, 360-74.03], {icon: markerIcon}).bindPopup('Palisades Emergency Residence Corporation (PERC)').addTo(map);
    // var marker = L.marker([40.761384, 360-74.035241], {icon: markerIcon}).bindPopup('St. Joseph & Michael Food Pantry').addTo(map);
    // var marker = L.marker([ 40.775716, 360-74.026217], {icon: markerIcon}).bindPopup('North Hudson Community Action Corporation/WIC').addTo(map);
    // var marker = L.marker([ 40.772944, 360-74.143995], {icon: markerIcon}).bindPopup('North Hudson Community Action Corporation/WIC').addTo(map);
    // var marker = L.marker([40.746583, 360-74.1568], {icon: markerIcon}).bindPopup('North Hudson Community Action Corporation/WIC').addTo(map);
    // var marker = L.marker([40.797239, 360-74.012143], {icon: markerIcon}).bindPopup('North Hudson Community Action Corporation/WIC').addTo(map);
    // var marker = L.marker([40.739791, 360-74.04677], {icon: markerIcon}).bindPopup('Emergency Solutions').addTo(map);
    // var marker = L.marker([40.766916, 360-74.146635], {icon: markerIcon}).bindPopup('The Salvation Army Kearny Corps').addTo(map);
    // var marker = L.marker([40.708328, 360-74.087328], {icon: markerIcon}).bindPopup('The Salvation Army Jersey City Corps').addTo(map);
    // var marker = L.marker([40.732661, 360-74.04137], {icon: markerIcon}).bindPopup('The Beacon at Bethany Lutheran Church').addTo(map);
    // var marker = L.marker([40.74032, 360-74.031139], {icon: markerIcon}).bindPopup('The Hoboken Shelter').addTo(map);
    // var marker = L.marker([40.753079, 360-74.048066], {icon: markerIcon}).bindPopup('St. Johns Food Kitchen').addTo(map);


    // var marker = L.marker([40.73, 360-74.07]).addTo(map);
    // var marker = L.marker([40.707213, 360-74.076559]).addTo(map);
    // var marker = L.marker([40.77, 360-74.03]).addTo(map);
    // var marker = L.marker([40.761384, 360-74.035241]).addTo(map);
    // var marker = L.marker([40.772944, 360-74.143995]).addTo(map);
    // var marker = L.marker([40.797239, 360-74.012143]).addTo(map);
    // var marker = L.marker([40.739791, 360-74.04677]).addTo(map);
    // var marker = L.marker([40.766916, 360-74.146635]).addTo(map);
    // var marker = L.marker([40.708328, 360-74.087328]).addTo(map);
    // var marker = L.marker([40.732661, 360-74.04137]).addTo(map);
    // var marker = L.marker([40.74032, 360-74.031139]).addTo(map);
    // var marker = L.marker([40.753079, 360-74.048066]).addTo(map);


      //  var marker = L.marker([locations[1], ]).addTo(map);
