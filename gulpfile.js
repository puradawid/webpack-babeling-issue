var gulp = require('gulp'),
  gutil = require('gutil'),
    happypack = require('happypack'),
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
        loader: 'happypack/loader',
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new happypack({
      loaders: [
        {
          path: 'babel-loader',
          query: { presets: [require.resolve('babel-preset-es2015')] }
        }
      ]
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
