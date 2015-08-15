'use strict';
//concat config

var fs = require('fs');

module.exports = {
    test: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: function(src, filepath) {
              return src.replace(/(^|\n)[ \t]*(@charset "UTF-8";);?\s*/g, '$1');
            }
        },
        src: [
            'src/scss/helpers/*.scss',
            'src/scss/*.scss',
        ],
        dest: 'tests/specs/stringy.scss',
    },
    dist: {
        options: {
            // Replace all 'use strict' statements in the code with a single one at the top
            banner: fs.readFileSync('./banner.txt', 'utf8'),
            process: function(src, filepath) {
              return src.replace(/(^|\n)[ \t]*(@charset "UTF-8";);?\s*/g, '$1');
            }
        },
        src: [
            'src/scss/helpers/*.scss',
            'src/scss/*.scss',
        ],
        dest: 'dist/stringy.scss',
    }
};
