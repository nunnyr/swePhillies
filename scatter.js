// import * as scrapers from scraper.js

// console.log("here", scrapers)


// const button = document.getElementById('refresh');
// button.addEventListener("click", refresh)

var ctx = document.getElementById('myChart');
let lastName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var myChart = new Chart(ctx, {
  type: 'scatter',
  data: {
      labels: lastName,
      datasets: [{
          label: 'Average Contract',
          pointBackgroundColor: ['blue', 'pink', 'purple'],
          data: [
            {x:0, y: 20}
          ]
          

      }]
  },
  options: {
      scales: {
          x: {
            beginAtZero: true
          },
          y: {
              beginAtZero: true
          }
      }
  }
});


