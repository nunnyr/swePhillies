const puppeteer = require('puppeteer')

async function mlb(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    const url = "https://questionnaire-148920.appspot.com/swe/data.html"
    await page.goto(url)


    let names = await page.evaluate(() => 
        Array.from(document.querySelectorAll("tr td.player-name"))
        .map(name => name.innerText.trim())
      )
     // console.log("name", names)
      


    let salaries = await page.evaluate(() => 
        Array.from(document.querySelectorAll("tr td.player-salary"))
        .map(salary => salary.innerText.trim())
      )
      //console.log("here", salaries)
       

    let years = await page.evaluate(() => 
        Array.from(document.querySelectorAll("tr td.player-year"))
        .map(year=> year.innerText.trim())
      )
     // console.log("years", years)
    
    let levels = await page.evaluate(() => 
      Array.from(document.querySelectorAll("tr td.player-level"))
      .map(level=> level.innerText.trim())
    )
   // console.log("levels", levels)

    // const data = await page.evaluate(() => 
    //     Array.from(document.querySelectorAll("tr"))
    //     .map(info => ({
    //         name: info.querySelector("td.player-name").innerText.trim(),
    //         salary: info.querySelector("td.player-salary").innerText.trim(),
    //         year: info.querySelector("td.player-year").innerText.trim(),
    //         level: info.querySelector("td.player-level").innerText.trim()
    //     }))
    // )
    
    let cleanNumbers = cleanData(salaries)
    let mlbContract = findAverage(cleanNumbers)

           
    await browser.close();
}

function cleanData(array){
   let cleanArr = []
    let finalArr = []

    for(let num of array){
        cleanArr.push(num.replace(/,/g, ''))
    }

    console.log("this", cleanArr)
    let reg = /\d+/g

    for(let num of cleanArr){
        if(num !== '' && num !== 'no salary data'){
            finalArr.push(parseInt(num.match(reg)))
        } 
    }
    console.log("this is final", finalArr)
    return finalArr
    
}

function findAverage(cleanNumbers){
    let sortedSalaries = cleanNumbers.sort((a, b) => b - a)
    let topSalary = sortedSalaries.slice(0, 126)
    
    let sum = 0
    for(let num of topSalary){
        sum += num
    }

    let averageSum = Math.floor(sum / 125)
    return averageSum

}

mlb()



