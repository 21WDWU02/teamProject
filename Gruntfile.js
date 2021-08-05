module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  //   htmllint: {
  //   your_target: {
  //     options: {
  //       force: false,
  //       plugins: ['htmllint-plugin-name'],
  //       /* htmllint options go here */
  //     },
  //     src: [
  //       'index.html'
  //     ]
  //   }
  // },
  csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['sass/style.scss']
  },
  lax: {
    options: {
      import: false
    },
    src: ['sass/style.scss']
  }
},

  jshint: {
    all: ['Gruntfile.js', 'js/script.js']
  },
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss',       // 'destination': 'source'

      }
    }
  },
  watch: {
  scripts: {
    files: ['Gruntfile.js','js/script.js','sass/style.scss','index.html','css/style.css'],
    tasks: ['jshint','sass','csslint'],
    options: {
      spawn: false,
    },
  },
},
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'js/script.js',
      dest: 'js/script.min.js'
    }
  },

  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-uglify');
//'htmllint'

  // Default task(s).
  grunt.registerTask('default', ['csslint','jshint','sass','watch']);
  grunt.registerTask('ugly', ['uglify']);
};
