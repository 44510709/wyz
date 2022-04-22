const path = require('path');
const glob = require('glob');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const list = {}

async function makeList (dir, list) {
  const files = glob.sync(`${dir}/**/index.js`);
  for (let file of files) {
    const fileName = file.split(/[/.]/)[2];
    list[fileName] = `./${file}`;
  }
}

makeList('components/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'index',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              outputPath: 'img',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};