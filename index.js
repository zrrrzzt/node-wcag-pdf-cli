#!/usr/bin/env node
'use strict'

const checkPdf = require('wcag-pdf')
const getHelpText = require('./lib/getHelpText')
const pkg = require('./package.json')
const query = process.argv[2]

if (!query || query.indexOf('-h') !== -1 || query.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (query.indexOf('-v') !== -1 || query.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

checkPdf(query, (error, data) => {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log(JSON.stringify(data))
  }
})
