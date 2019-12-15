
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./devfractal-ui.cjs.production.min.js')
} else {
  module.exports = require('./devfractal-ui.cjs.development.js')
}
