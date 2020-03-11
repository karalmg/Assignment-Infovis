new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Girls', 'Boys'],
    datasets: [
      {
        label: 'Suicides (per 100 000)',
        backgroundColor: ['#C087A2', '#7DAFC2'],
        borderColor: '#FFF',
        data: [7.38, 12]
      }
    ]
  },
  options: {
    label: {
      display: true
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data['datasets'][0];
          var percent = Math.round(
            (dataset['data'][tooltipItem['index']] /
              dataset['_meta'][0]['total']) *
              100
          );
          return percent + '%';
        }
      },
      backgroundColor: '#fff',
      titleFontColor: '#555',
      bodyFontColor: '#555'
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Suicides of youths ages 13-25 (per 100 000) in 2018'
    }
  }
});
