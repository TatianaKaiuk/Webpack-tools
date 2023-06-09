const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.js', // файл на вход
    output: {
      filename: 'bundle.js', // главный файл в продакшен название
    },
    module: {
      rules: [
        {
          test: /.s?css$/, // какие файлы нужно преобразовать webpack,    записывается регулярным выражением
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ], // с помощью каких лоадеров это делать
        },
        {
          test: /.(jpg|png)$/, // для подгрузки картинки
          use: [
            {
              loader: 'url-loader', // какие лоадеры нужны
              options: {
                limit: 8192, // лимит размера картинки, если привышает, то автом используеться лоадер file-loader, который также нужно установить
                name: '[name],[ext]', // имя картинки
                outputPath: 'images', // папка для сохранения
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    
    ],
    devServer: {
      port: 9000,
      hot: true
    }
  };
  if(isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    );
  }
  return config;
};
