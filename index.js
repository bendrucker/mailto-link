'use strict'

const assert = require('assert-ok')
const array = require('cast-array')
const filter = require('object-filter')
const qs = require('query-string')

module.exports = function mailtoLink (options) {
  assert(options, 'options are required')

  let query = {
    to: addresses(options.to),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    subject: options.subject,
    body: options.body
  }

  const to = query.to
  query = filter(query, Boolean)
  delete query.to

  const querystring = qs.stringify(query)

  return 'mailto:' + (to || '') + (querystring ? '?' + querystring : '')
}

function addresses (email) {
  return email ? array(email).join(',') : undefined
}
