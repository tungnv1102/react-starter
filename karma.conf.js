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
      'test/index.js': ['webpack', 'sourcemap']
    },

    reporters: ['progress', 'coverage-istanbul'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    client: {
      config: {
        browserConsoleLogOptions: true
      }
    },

    concurrency: Infinity,
    webpack: {
      ...webpack,
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
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
