'use strict';

module.exports = function(grunt, options) {
    return {
        options: {
            singleQuotes: true 
        },
        sources: {
        	files: [{
	            expand: true,
	            cwd: 'src',
	            src: ['gr-grid-board.js'],
	            dest: 'dist'
	        }]
        }
    };     
};