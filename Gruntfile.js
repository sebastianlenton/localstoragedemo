module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),	
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			multiWindowComm: {
				files: {
					'multiWindowComm/library/css/style.css' : 'multiWindowComm/library/scss/style.scss'
				}
			},
			canvasPipe: {
				files: {
					'canvasStreaming/library/css/style.css' : 'canvasStreaming/library/scss/style.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 20 versions']
			},
			multiWindowComm: {
				src: 'multiWindowComm/library/css/style.css',
				dest: 'multiWindowComm/library/css/style.dist.css'
			},
			canvasPipe: {
				src: 'canvasStreaming/library/css/style.css',
				dest: 'canvasStreaming/library/css/style.dist.css'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			docs: {
				files: ['canvasStreaming/**/*.html', 'multiWindowComm/**/*.html'],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: ['canvasStreaming/**/*.js', 'multiWindowComm/**/*.js'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: ['shared/**/*.scss', 'canvasStreaming/**/*.scss', 'multiWindowComm/**/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
				}
			}
		}
	
	});
	
	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

};