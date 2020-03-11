anychart.onDocumentReady(function() {
  // create map
  var map = anychart.map();

  // create data set
  var dataSet = anychart.data.set([
    { id: 'SE.4461', boys: 12, girls: 7.38, value: 19.38 },
    { id: 'SE.JO', boys: 8.88, girls: 3.26, value: 10 },
    { id: 'SE.GV', boys: 24.09, girls: 8.86, value: 32.95 },
    { id: 'SE.KA', boys: 9.56, girls: 0, value: 9.56 },
    { id: 'SE.KO', boys: 28.29, girls: 22.6, value: 50.89 },
    { id: 'SE.KR', boys: 10.64, girls: 17.78, value: 28.43 },
    { id: 'SE.OR', boys: 10.81, girls: 19.14, value: 29.95 },
    { id: 'SE.OG', boys: 6.91, girls: 2.53, value: 9.43 },
    { id: 'SE.SD', boys: 26.64, girls: 4.14, value: 30.78 },
    { id: 'SE.VM', boys: 12.29, girls: 13.53, value: 25.82 },
    { id: 'SE.HA', boys: 6.74, girls: 7.42, value: 14.16 },
    { id: 'SE.VR', boys: 4.13, girls: 0, value: 4.13 },
    { id: 'SE.JA', boys: 26.92, girls: 19.58, value: 46.5 },
    { id: 'SE.NB', boys: 22, girls: 10.5, value: 32.5 },
    { id: 'SE.VN', boys: 14.13, girls: 5.2, value: 19.33 },
    { id: 'SE.VB', boys: 20.07, girls: 4.32, value: 24.39 },
    { id: 'SE.GT', boys: 40.6, girls: 22.86, value: 63.46 },
    { id: 'SE.ST', boys: 9.85, girls: 5.23, value: 15.09 },
    { id: 'SE.UP', boys: 19.91, girls: 11.83, value: 31.74 },
    { id: 'SE.BL', boys: 20.19, girls: 16.02, value: 36.21 },
    { id: 'SE.VG', boys: 8.61, girls: 8.52, value: 17.13 },
    { id: 'SE.SN', boys: 7.5, girls: 3.54, value: 11.04 }
  ]);

  // create choropleth series
  var series = map.choropleth(dataSet);

  map.palette(['#3BA137']);
  map.background().fill('#FCF4ED');

  // set click functions
  var changeLineGraph = function(e) {
    var index = e.pointIndex;
    setLabel(index);
    syncGraph(index);
  };

  map.listen('click', changeLineGraph);

  // set geoIdField to 'id', this field contains in geo data meta properties
  series.geoIdField('id');

  var title = map.title();
  title.enabled(true);
  title.text('Youth suicide per 100,000');
  title.fontColor('#555');
  title.fontWeight(700);
  title.fontSize(11);

  var tooltip = series.tooltip();
  tooltip.fontColor('#333');

  var tooltipTitle = series.tooltip().title();
  tooltipTitle.fontColor('#333');
  tooltipTitle.fontWeight(500);

  // set tooltip
  series.tooltip().format(function(e) {
    return 'Total: ' + e.getData('value') + '\n' +'Boys: ' + e.getData('boys') + '\n' + 'Girls: ' + e.getData('girls');
  });

  // font settings for tooltip text

  series
    .tooltip()
    .background('#fff')
    .fontColor('#333');

  // set map color settings
  series.colorScale(anychart.scales.linearColor('#fff', '#1B9117'));
  series.hovered().fill('#fff');

  // set geo data, you can find this map in our geo maps collection
  // https://cdn.anychart.com/#maps-collection
  map.geoData(anychart.maps['sweden']);

  //set map container id (div)
  map.container('map-chart-container');

  //initiate map drawing
  map.draw();
});
