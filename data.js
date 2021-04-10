

// const url = "http://localhost:3000/infos/index"

// const el = []

// function showData(site){
//     fetch(site)
//     .then(res => res.json())
//     .then(data => {
//         console.log("this is data", data)
        
//     })
// }


// showData(url)

    // function cleanData(array){
    //    let cleanArr = []
    //     let finalArr = []
    
    //     for(let num of array){
    //         cleanArr.push(num.replace(/,/g, ''))
    //     }
    
    //     console.log("this", cleanArr)
    //     let reg = /\d+/g
    
    //     for(let num of cleanArr){
    //         if(num !== '' && num !== 'no salary data'){
    //             finalArr.push(parseInt(num.match(reg)))
    //         } 
    //     }
    //     console.log("this is final", finalArr)
    //     return finalArr
        
    // }
    
    // function findAverage(cleanNumbers){
    //     let sortedSalaries = cleanNumbers.sort((a, b) => b - a)
    //     let topSalary = sortedSalaries.slice(0, 126)
        
    //     let sum = 0
    //     for(let num of topSalary){
    //         sum += num
    //     }
    
    //     let averageSum = Math.floor(sum / 125)
    //     return averageSum
    
    // }