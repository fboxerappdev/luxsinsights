// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
   // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
   
  
	grunt.initConfig({
		
		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),
		
		
		less: {
			dev: { 
				files: {
					'dist/css/style.css': 'less/style.less'
				}
			}, 
			production: { 
				files: {
					'dist/css/style.css': 'less/style.less',
					'dist/css/bootstrap.css': 'less/bootstrap.less'
				}
			} 
		  
		},
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/style.min.css': 'dist/css/style.css',
					'dist/css/bootstrap.min.css': 'dist/css/bootstrap.css'
				}
			}
		},
		watch: {
			// for stylesheets, watch css and less files 
			// only run less and cssmin 
			files: ['less/*.less'], 
			tasks: ['less:dev'],
		},
		serve: {
			options: {
				port: 9000,	
				'less/style.less': {
					tasks: ['less:dev'], // required 
				}
			}
		}
		// ============= // CREATE TASKS ========== //
		
	});
	
	grunt.registerTask('default', ['less', 'cssmin']); 


  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

};
