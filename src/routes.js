const { Router } = require('express')

const MovieControllerCache = require('./Controllers/MovieControllerCache')

const routes = Router()

routes.get('/', MovieControllerCache.get)
routes.get('/awards', MovieControllerCache.getAwards)
routes.get('/winners', MovieControllerCache.getWinners)

module.exports = routes