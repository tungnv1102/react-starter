import webpack from './webpack.config'
// import path from 'path'
module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/index.js'
    ],

    exclude: [],

    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },

    reporters: ['progress', 'coverage-istanbul'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    concurrency: Infinity,
    webpack: {
      ...webpack,
      devtool: 'source-map'
    },

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: './coverage',
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    }
  })
}
