'use strict';

var path     = require('path'),
    sassTrue = require('sass-true'),
    sassFile = path.join(__dirname, 'node-tests.scss');

sassTrue.runSass({file: sassFile}, describe, it);
