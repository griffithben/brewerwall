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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-md5');
  grunt.loadNpmTasks('grunt-apidoc');

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
      },
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['coffee'],
        options: {
          noLineComments: true,
        },
      },
      views: {
        files: ['coffee/views/**/*.html'],
        tasks: ['copy'],
        options: {
          noLineComments: true,
        },
      },
      apidocs: {
        files: ['app/routes/*.php'],
        tasks: ['apidoc'],
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
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, cwd: 'coffee/', src: ['**/*.html'], dest: 'public/js/dev/'}
        ]
      }
    },
    apidoc: {
      myapp: {
        src: "app/routes/",
        dest: "public/docs/"
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      standalone: {
        options: {
          beautify: false
        },
        files: {
          'public/js/dev/components/json2.js':['components/json2/json2.js'],
          'public/js/dev/components/jquery.js':['components/jquery/dist/jquery.js'],
          'public/js/dev/components/underscore.js':['components/underscore/underscore.js'],
          'public/js/dev/components/backbone.js':['components/backbone/backbone.js'],
          'public/js/dev/components/bootstrap.js':['components/bootstrap/dist/js/bootstrap.min.js'],
          'public/js/dev/components/require.js':['components/requirejs/require.js'],
          'public/js/dev/components/text.js':['components/requirejs-text/text.js'],
          'public/js/dev/components/beercalc.js':['components/beercalc_js/src/beercalc.min.js'],
          'public/js/html5shiv.js':['components/html5shiv/dist/html5shiv.js'],
          'public/js/respond.js':['components/respond/src/respond.js']
        }
      },
      components: {
        options: {
          beautify: false
        },
        files: {
          'public/js/components/json2.js':['components/json2/json2.js'],
          'public/js/components/almond.js':['components/almond/almond.js'],
          'public/js/components/jquery.js':['components/jquery/dist/jquery.js'],
          'public/js/components/underscore.js':['components/underscore/underscore.js'],
          'public/js/components/backbone.js':['components/backbone/backbone.js'],
          'public/js/components/bootstrap.js':['components/bootstrap/dist/js/bootstrap.min.js'],
          'public/js/components/require.js':['components/requirejs/require.js'],
          'public/js/components/text.js':['components/requirejs-text/text.js'],
          'public/js/components/beercalc.js':['components/beercalc_js/src/beercalc.min.js'],
          'public/js/html5shiv.js':['components/html5shiv/dist/html5shiv.js'],
          'public/js/respond.js':['components/respond/src/respond.js']
        }
      }

    },
    coffee: {
      oneToOne: {
        expand: true,
        cwd: 'coffee/',
        src: ['**/*.coffee'],
        dest: 'public/js/dev/',
        ext: '.js'
      }
    },
    md5: {
      compile: {
        files: {
          'public/js/md5/': 'public/js/prod/*.js'
        },
        options: {
          keepBasename: true,
          keepExtension: true,
          after: function(fileChanges){
            var dictionary = {};
            function strip(str){
              return str.replace(/^[\/]?public/,'').replace(/.js$/,'');
            }
            fileChanges.forEach(function(fc){
              var index = strip('/' + fc.oldPath);
              dictionary[index] = strip(fc.newPath);
            });
            grunt.file.write('public/modeDictionary.json', JSON.stringify(dictionary,true));
          }
        }
      }
    },
    requirejs: {
      yeasts: {
        options: {
          baseUrl: "public/js/dev",
          mainConfigFile: "public/js/dev/config.js",
          include: ['views/yeasts/yeast_view'],
          out: "public/js/prod/yeasts.js"
        }
      },
      hops: {
        options: {
          baseUrl: "public/js/dev",
          mainConfigFile: "public/js/dev/config.js",
          include: ['views/hops/hop_view'],
          out: "public/js/prod/hops.js"
        }
      },
      srms: {
        options: {
          baseUrl: "public/js/dev",
          mainConfigFile: "public/js/dev/config.js",
          include: ['views/srms/srm_view'],
          out: "public/js/prod/srms.js"
        }
      },
      calculations: {
        options: {
          baseUrl: "public/js/dev",
          mainConfigFile: "public/js/dev/config.js",
          include: ['views/calculations/calculation_view'],
          out: "public/js/prod/calculations.js"
        }
      },
      beer_styles: {
        options: {
          baseUrl: "public/js/dev",
          mainConfigFile: "public/js/dev/config.js",
          include: ['views/beer_styles/beer_style_view'],
          out: "public/js/prod/beer_styles.js"
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['clean', 'compass', 'coffee', 'jshint', 'concat', 'uglify', 'requirejs', 'md5']);
  grunt.registerTask('build', ['requirejs', 'md5']);
};
