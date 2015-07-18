module.exports = function(grunt) {
    return {
        sources: {
            src: 'src/**.html',
            dest: 'dist/gr-grid-board-template.js',
            options:  {
                url: function(url) {
                    return url.replace('.html', '').replace('src/', '');
                },
                module: 'grGridBoard'
            }
        }
    };
};