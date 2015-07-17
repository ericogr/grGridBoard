'use strict';

module.exports = function(grunt, options) {
    return {
        options: {
            singleQuotes: true 
        },
        grGridBoard: {
        	files: [{
	            expand: true,
	            cwd: 'src',
	            src: ['gr-grid-board.js'],
	            dest: 'dist', // Dest filepaths will have this extension. 
	            extDot: 'last'        // Extensions in filenames begin after the last dot 
	        }]
        }
    };     
};