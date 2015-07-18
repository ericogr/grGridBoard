'use strict';

module.exports = function(grunt, options) {
    return {
    	sources: {
	        files: {
	        	'dist/gr-grid-board.min.js': ['dist/gr-grid-board.js'],
	        	'dist/gr-grid-board-template.min.js': ['dist/gr-grid-board-template.js']
	        }
	    }
    };     
};