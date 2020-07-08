const path = require('path');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ],
    },
    entry: ['@babel/polyfill', './lib/renderers/dom.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  
                    options: {
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            [
                                '@babel/plugin-proposal-decorators',
                                {
                                  'legacy': true
                                }
                            ],
                            '@babel/plugin-proposal-export-namespace-from',
                            '@babel/plugin-proposal-function-sent',
                            '@babel/plugin-proposal-json-strings',
                            '@babel/plugin-proposal-numeric-separator',
                            '@babel/plugin-proposal-throw-expressions',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-syntax-import-meta'
                        ]
                    }
                }
            }
        ]
    }
}

module.exports = config;