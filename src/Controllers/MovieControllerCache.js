const cache = require('../Models/MovieModelCache')

class MovieControllerCache {

    async get(req, res) {
        try {
            const listMovies = []
            for (let i = 1; i < cache.memsize(); i++) {
                listMovies.push(cache.get(i))
            }

            if (!listMovies) {
                return res.status(404).json({
                    status: 'Not Found',
                    message: 'Movies not found'
                })
            }

            return res.status(200).json(listMovies)
        } catch (error) {
            return res.status(400).json({
                status: 'Bad request',
                message: error
            })
        }
    }

    async getAwards(req, res) {
        try {
            const listMovies = []
            for (let i = 1; i < cache.memsize(); i++) {
                listMovies.push(cache.get(i))
            }

            const awardMovies = listMovies.filter(element => element.winner === 'yes');

            if (!awardMovies) {
                return res.status(404).json({
                    status: 'Not Found',
                    message: 'Movies not found'
                })
            }

            return res.status(200).json(awardMovies)
        } catch (error) {
            return res.status(400).json({
                status: 'Bad request',
                message: error
            })
        }
    }

    async getWinners(req, res) {
        try {
            const listMovies = []
            for (let i = 1; i < cache.memsize(); i++) {
                listMovies.push(cache.get(i))
            }

            const awardMovies = listMovies.filter(element => element.winner === 'yes');

            awardMovies.sort((a, b) => a.year - b.year)

            awardMovies.sort((a, b) => {
                const prodA = a.producers.toUpperCase();
                const prodB = b.producers.toUpperCase();
                if (prodA < prodB) {
                    return -1;
                }
                if (prodA > prodB) {
                    return 1;
                }
                return 0;
            });
            
            var minProd = new Array()
            var maxProd = new Array()
            var currentProd
            var currentYear
            var currentInterval
            let currentIntervalMin = 999999
            let currentIntervalMax = 0

            awardMovies.forEach(element => {

                if (element.producers == currentProd) {
                    currentInterval = element.year - currentYear

                    if (currentInterval == currentIntervalMax) {
                        currentIntervalMax = currentInterval
                        maxProd.push({
                            producers: element.producers,
                            interval: currentIntervalMax,
                            previousWin: currentYear,
                            followingWin: element.year})
                    }

                    if (currentInterval > currentIntervalMax) {
                        currentIntervalMax = currentInterval
                        maxProd = new Array()
                        maxProd.push({
                            producers: element.producers,
                            interval: currentIntervalMax,
                            previousWin: currentYear,
                            followingWin: element.year})
                    }

                    if (currentInterval == currentIntervalMin) {
                        currentIntervalMin = currentInterval
                        minProd.push({
                            producers: element.producers,
                            interval: currentIntervalMin,
                            previousWin: currentYear,
                            followingWin: element.year})
                    }

                    if (currentInterval < currentIntervalMin) {
                        currentIntervalMin = currentInterval
                        minProd = new Array()
                        minProd.push({
                            producers: element.producers,
                            interval: currentIntervalMin,
                            previousWin: currentYear,
                            followingWin: element.year})
                    }
                }
                currentProd = element.producers
                currentYear = element.year
            });

            return res.status(200).json({min: minProd, max: maxProd})
        } catch (error) {
            return res.status(400).json({
                status: 'Bad request',
                message: error
            })
        }
    }
}

module.exports = new MovieControllerCache()