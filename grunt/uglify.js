'use strict';

module.exports = function(grunt, options) {
    return {
        files: {
            cwd: 'src',
            src: ['gr-grid-board.js'],
            dest: 'dist',
            expand: true
        }
    };     
};