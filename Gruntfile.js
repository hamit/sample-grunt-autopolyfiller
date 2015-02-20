module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-autopolyfiller');
  grunt.registerTask('jspoly', ['autopolyfiller']);
  grunt.initConfig( {
	autopolyfiller: {
		latest_browsers_and_ie: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			files: {
				'polyfill_result.js': ['js_to_be_polyfilled.js']
			}
		}
	}
  } );
};
