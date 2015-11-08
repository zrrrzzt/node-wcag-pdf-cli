'use strict'

var exec = require('child_process').execFile
var tap = require('tap')
var getHelpText = require('../lib/getHelpText')
var pkgVersion = require('../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function getHelpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithHelp (test) {
  exec('./index.js', ['--help'], function getHelpTextWithHelp (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function getVersionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns version with --version flag', function versionWithVersion (test) {
  exec('./index.js', ['--version'], function getVersionWithVersion (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns error on error', function testError (test) {
  exec('./index.js', ['npmlovesyou-do-you-love-npm'], function testWithError (error, stdout, stderr) {
    test.ok(error, 'Error OK')
    test.end()
  })
})

tap.test('It returns data if url supplied', function testData (test) {
  exec('./index.js', ['https://helsedirektoratet.no/Documents/Folkehelsearbeid%20i%20kommunen/Nyhetsbrev-folkehelsearbeid-2015-4.pdf'], function testWithData (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.ok(stdout.toString().trim(), 'Data OK')
    test.end()
  })
})

tap.test('It returns data if path to file supplied', function testDataFromFile (test) {
  exec('./index.js', ['test/data/invalid.pdf'], function doTestDataWithFile (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.ok(stdout.toString().trim(), 'Data OK')
    test.end()
  })
})
