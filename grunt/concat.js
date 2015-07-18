module.exports = function(grunt, options) {
    return {
        options: {
            separator: ';',
        },
        dist: {
            src: ['dist/gr-grid-board.js', 'dist/gr-grid-board-template.js'],
            dest: 'dist/gr-grid-board-all.js',
        }
    };     
};