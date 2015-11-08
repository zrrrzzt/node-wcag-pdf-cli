[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/zrrrzzt/node-wcag-pdf-cli.svg?branch=master)](https://travis-ci.org/zrrrzzt/node-wcag-pdf-cli)
# node-wcag-pdf-cli
CLI for checking the accessibility of a pdf document using [checkers.eiii.eu](http://checkers.eiii.eu/)

## Installation

From npm

```sh
$ npm install wcag-pdf-cli -g
```

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/node-wcag-pdf-cli.git
```

cd into directory an run the setup script

```sh
$ npm run setup
```

## Usage

Pass in url to pdf or path to file

```sh
$ wcag-pdf <url-or-path-to-file>
```

## Related
- [node-wcag-pdf](https://github.com/zrrrzzt/node-wcag-pdf) API for this module
