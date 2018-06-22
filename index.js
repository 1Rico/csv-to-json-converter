const csv = require('csvtojson')
const fs = require('fs')
const csvFile = 'customer-data.csv'

let arr = []

csv()
    .fromFile(csvFile)
    .on('json',(jsonObj)=> {
        arr.push(jsonObj)
    })

    .on('done', (error) => {
        if(error){
            console.log(`Error: ${error}`);
            process.exit(1)
        }
        fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error) => {
            if(error) {
                console.log(`Error: ${error}`);
                process.exit(1)
            }
            console.log("Done Writing File")
            process.exit(0)
        })
    })