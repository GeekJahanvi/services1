const path = require('path');

module.exports = {
  entry: './server.ts',
  output: {
    filename: 'index.ts',
    path: path.resolve(__dirname, 'src'),
  },
};