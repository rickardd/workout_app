module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './static/styles/main.css' : './src/scss/main.scss'
            }
        }
    },
    copy: {
      main: {
        files: [
          {expand: false, src: ['node_modules/normalize.css/normalize.css'], dest: 'src/scss/vendor/normalize.css'},
          {expand: false, src: ['node_modules/simple-css-reset/reset.css'], dest: 'src/scss/vendor/reset.css'}
          // ...add more objects here
        ],
      },
    },
    watch: {
      scripts: {
        files: ['./src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {

        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('vendor', ['copy']);

};