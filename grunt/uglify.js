module.exports = function(grunt, options) {
    return {
    	sources: {
	        files: {
	        	'dist/gr-grid-board.min.js': ['dist/gr-grid-board.js'],
	        	'dist/gr-grid-board-template.min.js': ['dist/gr-grid-board-template.js'],
                'dist/gr-grid-board-all.min.js': ['dist/gr-grid-board-all.js']
	        }
	    }
    };     
};