let target_site = 'https://nonojapan.com/'

const request = require('request')
const cheerio = require('cheerio')

request(target_site,(err, response, body) => {
    if(!err){
        let $ = cheerio.load(body)
        console.log($('.mdl-cell.mdl-card.mdl-shadow--4dp.portfolio-card'))
        // for(item of $('.mdl-navigation__link').toArray()){
        //     console.log(item.data)
        // }
    }
    
})