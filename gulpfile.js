var gulp = require('gulp')
var gutil = require('gulp-util')
var browserSync = require('browser-sync').create()
var eslint = require('gulp-eslint')
var sass = require('gulp-sass')
var reload = browserSync.reload

var webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server")
var webpackConfig = require("./webpack.config.js")

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server'])

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
// can serve an old app on refresh
gulp.task('build-dev', ['webpack:build-dev'], function() {
  gulp.watch(['./app/**/*'], ['webpack:build-dev'])
})

// Build Production
gulp.task('build', ['webpack:build'])

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig)
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	)

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err)
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}))
		callback()
	})
})

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig)
myDevConfig.devtool = "sourcemap"
myDevConfig.debug = true

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig)

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err)
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}))
		callback()
	})
})

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig)
	myConfig.devtool = "eval"
	myConfig.debug = true

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err)
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html")
	})
})

gulp.task('eslint', function() {
  return gulp.src(['./src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.result(function(result) {
    console.log('ESLint result: ' + result.filPath)
    console.log('# Message: ' + result.messages.length)
    console.log('# Warning: ' + result.warningCount)
    console.log('# Errors: ' + result.errorCount)
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
})

gulp.task('lint-functions', function() {
  gulp.watch(['./src/**/*.js'], ['lint'])
})

// Static Server + watching scss/html files
gulp.task('default', function() {
  browserSync.init({
    server: "./app/"
  })
  gulp.watch(["!./node_modules", "!./bower_components","./src/**/*.js"]).on('change', reload)
	gulp.watch("./**/*.html").on('change', reload)
})

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(reload({stream: true}))
})
