'use strict'

var test = require('tape')
var mailto = require('./')

test(function (t) {
  t.equal(mailto({to: 'bvdrucker@gmail.com'}), 'mailto:bvdrucker@gmail.com')
  t.equal(mailto({to: ['bvdrucker@gmail.com', 'bdrucker@eazeup.com']}), 'mailto:bvdrucker@gmail.com,bdrucker@eazeup.com')
  t.equal(mailto({subject: 'Hello world'}), 'mailto:?subject=Hello%20world')
  t.end()
})
