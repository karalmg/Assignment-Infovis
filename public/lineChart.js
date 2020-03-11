var line = document.getElementById('lineChart').getContext('2d');

var boysData = [];
var girlsData = [];
//var valueData = [];
var yearsData = [];

var lineChart;
var path = 'data/riket.csv';
var countyLabel = 'National Rate';

// load the arrays with data
loadData(() => {
  drawLineChart();
}, path);

function drawLineChart() {
  new Chart(line, {
    type: 'line',
    data: {
      labels: getYears(),
      datasets: [
        {
          label: 'Girls',
          data: getGirls(),
          backgroundColor: 'rgba(192, 135, 162, 0.5)',
          borderColor: 'rgba(192, 135, 162, 1.0)',
          borderWidth: 5,
          pointBackgroundColor: 'rgba(192, 135, 162, 1.0)',
          pointHitRadius: 10,
          pointBorderWidth: 5,
          // pointHoverRadius: 3,
          pointHoverBackgroundColor: 'rgba(192, 135, 162, 1.0)'
        },
        {
          label: 'Boys',
          data: getBoys(),
          backgroundColor: 'rgba(125, 175, 194, 0.5)',
          borderColor: 'rgba(125, 175, 194, 1.0)',
          borderWidth: 5,
          pointBackgroundColor: 'rgba(125, 175, 194, 1.0)',
          pointHitRadius: 10,
          pointBorderWidth: 5,
          // pointHoverRadius: 1,
          pointHoverBackgroundColor: 'rgba(125, 175, 194, 1.0)'
        }
        //{
          //label: 'Total',
          //data: getValue(),
          //backgroundColor: 'rgba(125, 175, 194, 0.5)',
          //borderColor: 'rgba(125, 175, 194, 1.0)',
          //borderWidth: 5,
          //pointBackgroundColor: 'rgba(125, 175, 194, 1.0)',
          //pointHitRadius: 10,
          //pointBorderWidth: 5,
          // pointHoverRadius: 1,
          //pointHoverBackgroundColor: 'rgba(125, 175, 194, 1.0)'
        //}
      ]
    },
    options: {
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#555',
        bodyFontColor: '#555',

        mode: 'index'
      },
      title: {
        display: true,
        text:
          countyLabel +
          ' - ' +
          'Number of suicides of youths aged 10-24 (per 100 000)'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              tickMarkLength: 20
            }
          }
        ]
      }
    }
  });
}
