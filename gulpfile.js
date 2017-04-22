var gulp = require('gulp'),
  gutil = require('gutil'),
webpack = require('webpack');

var webpackConfig = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']}
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })]
  };

var callbackFunction = function (callback) { 
  return function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
  };
};

gulp.task('build', function(callback) { 
 console.log("Starting webpack");
 webpack(webpackConfig, callbackFunction(callback));
});
