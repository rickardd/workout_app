module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './static/styles/main.css' : './src/styles/src/main.scss'
            }
        }
    },
    watch: {
      scripts: {
        files: ['./src/styles/src/main.scss'],
        tasks: ['sass'],
        options: {
          // spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};