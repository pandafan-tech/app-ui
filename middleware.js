const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['load-rt-data'] = require('../middleware/load-rt-data.js')
middleware['load-rt-data'] = middleware['load-rt-data'].default || middleware['load-rt-data']

middleware['reload-raw-service-data'] = require('../middleware/reload-raw-service-data.js')
middleware['reload-raw-service-data'] = middleware['reload-raw-service-data'].default || middleware['reload-raw-service-data']

middleware['server-header'] = require('../middleware/server-header.js')
middleware['server-header'] = middleware['server-header'].default || middleware['server-header']

export default middleware
