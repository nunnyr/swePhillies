// import * as scrapers from scraper.js

const url = "http://localhost:3000/infos/index"

const el = []
let mlbAverage


let arr

function showData(site){
    fetch(site)
    .then(res => res.json())
    .then(data => {
        // console.log("this is data", data)
        arr = data
        cleanSal(arr)
    })
}

showData(url)

function cleanSal(arr){
  let finalSalaries = []
  let sortedSalaries
  let topSalaries
  let sum = 0
  
  const filtArr = arr.filter(single => 
    (single.salary !== '' && single.salary !== 'no salary data')
  ).map(sal => sal.salary.replace(/,/g, ''))


  //console.log("filt", filtArr)
  
  let reg = /\d+/g

  for(let num of filtArr){
    finalSalaries.push(parseInt(num.match(reg)))
  }

  console.log("ok", finalSalaries)
  sortedSalaries = finalSalaries.sort((a, b) => b - a)
  topSalaries = sortedSalaries.slice(0, 126)

  for(let num of topSalaries){
    sum += num
  }
  mlbAverage = Math.floor(sum /  topSalaries.length)
  console.log("average", mlbAverage)
  
}


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
            
            {x:0, y: mlbAverage}
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
 })



