#!/usr/bin/env node
'use strict'

var checkPdf = require('wcag-pdf')
var getHelpText = require('./lib/getHelpText')
var pkg = require('./package.json')
var query = process.argv[2]

if (!query || query.indexOf('-h') !== -1 || query.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (query.indexOf('-v') !== -1 || query.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

checkPdf(query, function getResults(error, data) {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log(JSON.stringify(data))
  }
})
