module.exports = {
  entry: './src/index.js', // файл на вход
  output: {
    filename: 'bundle.js', // главный файл в продакшен название
  },
  module: {
    rules: [
      {
        test: /.s?css$/, // какие файлы нужно преобразовать webpack,    записывается регулярным выражением
        use: ['style-loader', 'css-loader', 'sass-loader'], // с помощью каких лоадеров это делать
      },
      {
        test: /.(jpg|png)$/, // для подгрузки картинки
        use: [
          {
            loader: 'url-loader', // какие лоадеры нужны
            options: {
              limit: 8, // лимит размера картинки, если привышает, то автом используеться лоадер file-loader, который также нужно установить
              name: '[name],[ext]', // имя картинки
              outputPath: 'image', // папка для сохранения
            },
          },
        ],
      },
    ],
  },
};
