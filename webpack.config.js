const path = require('path');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ],
    },
    
    entry: {
        vendor: [
            'react',
            'react-dom',
            'prop-types',
            'axios',
            'lodash.debounce',
            'lodash.pickby'
        ],
        app: ['./lib/renderers/dom.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    }
}

module.exports = config;