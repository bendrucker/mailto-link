'use strict'

var assert = require('assert-ok')
var array = require('cast-array')
var filter = require('object-filter')
var qs = require('query-string')

module.exports = function mailtoLink (options) {
  assert(options, 'options are required')

  var query = {
    to: addresses(options.to),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    subject: options.subject,
    body: options.body
  }

  var to = query.to
  query = filter(query, Boolean)
  delete query.to

  var querystring = qs.stringify(query)

  return 'mailto:' + (to || '') + (querystring ? '?' + querystring : '')

}

function addresses (email) {
  return email ? array(email).join(',') : undefined
}
