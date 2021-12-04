/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({
    'aria-hidden': 'true'
  })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          28756489,
          28714654,
          28654639,
          28585852,
          28520365,
          28453529,
          28399281
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#191C1F',
        borderWidth: 4,
        pointBackgroundColor: '#212529'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()