var year = [],
  boys = [],
  girls = [];

/* with d3 v5 should be used like this, but is not working */
// function loadCSV() {
//   d3.csv('data/riket.csv').then(function(data) {
//     data.forEach(function(d) {
//       d.year = +d.year;
//       d.boys = +d.boys;
//       d.girls = +d.girls;
//     });
//     setArrays();
//   });
// }

function loadData(callback, path) {
  console.log('loading data into graph');

  d3.csv(path, function(csv) {
    csv.map(function(d) {
      year.push(d.year);
      boys.push(d.boys);
      girls.push(d.girls);
    });
    callback();
  });

  console.log('datasets: ', year, boys, girls);
}

// Emprt arrays to make room for new data
function emptyArray() {
  boys = [];
  girls = [];
  year = [];

  resetLineChartCanvas();
}

// Have to remove and add a new canvas not to get multiple canvas generated
// on top of eachother
function resetLineChartCanvas() {
  $('#lineChart').remove();
  $('#line-chart-container').append('<canvas id="lineChart"><canvas>');
  canvas = document.querySelector('#lineChart');
  line = canvas.getContext('2d');
}

function syncGraph(id) {
  console.log('Updating graph with data from ', id);
  if (id == 0) {
    path = 'data/riket.csv';

    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);

    console.log('data loaded: ', year, boys, girls);
  } else if (id == 20) {
    path = 'data/VG.csv';

    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);
  } else if (id == 13) {
    path = 'data/NB.csv';

    emptyArray();

    loadData(() => {
      drawLineChart();
    }, path);
  }
}

function getYears() {
  return year;
}

function getBoys() {
  return boys;
}

function getGirls() {
  return girls;
}

function setLabel(index) {
  console.log('Received indx: ', index);
  if (index == 20) {
    countyLabel = 'Västra Götaland';
    console.log('Setting label: ', countyLabel);
  } else if (index == 0) {
    countyLabel = 'National Rate';
    console.log('Setting label: ', countyLabel);
  } else if (index == 13) {
    countyLabel = 'Norrland';
    console.log('Setting label: ', countyLabel);
  }
}
