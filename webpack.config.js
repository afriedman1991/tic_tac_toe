const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
    entry: `${SRC_DIR}/Game.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};