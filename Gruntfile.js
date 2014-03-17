module.exports = function(grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-md5');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['sass/*.scss','sass/*.sass', 'sass/**/*.scss','sass/**/*.sass'],
        tasks: ['compass'],
        options: {
          noLineComments: true,
        },
      }
    },
    compass: {                  // Task
      dev: {                    // Another target
        options: {
          sassDir: 'sass/',
          cssDir: 'public/css/',
          outputStyle: 'compressed'
        }
      }
    },
    cssmin: {
      combine: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'public/css/components.css': [
            'components/bootstrap/dist/css/bootstrap.css'
          ]
        }
      }
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['clean', 'compass', 'coffee', 'jshint', 'concat', 'uglify', 'requirejs', 'md5']);
};
