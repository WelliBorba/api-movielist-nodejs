const cache = require('../Models/MovieModelCache');
const fs = require('fs')
const fastcsv = require('fast-csv')

const options = {
    objectMode: true,
    delimiter: ';'
  };

async function preLoadCache() {
    try {
        cache.clear;
        let stream = fs.createReadStream('movielist.csv')
        let countReg = 0
        let csvStream = fastcsv
        .parse(options)
        .on('data', function(data) {
            consProducts = (data[3]||'').replace(' and ',',').split(',')
            
            consProducts.forEach(element => {
                if (element.trim() != '') {
                    cache.put(countReg,{
                        year: data[0],
                        title: data[1],
                        studios: data[2],
                        producers: element.trim(),
                        winner: data[4]
                    });
                    countReg++
                }
            })
        })

        stream.pipe(csvStream)
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Error',
            message: error
        })
    }
}

module.exports = preLoadCache