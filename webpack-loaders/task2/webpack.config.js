module.exports = {
  entry: './src/index.js', // файл на вход
  output: {
    filename: 'bundle.js', // главный файл в продакшен название
  },
  module: {
    rules: [
      {
        test: /.js$/, // какие файлы нужно преобразовать webpack,    записывается регулярным выражением
        use: ['babel-loader'], // с помощью каких лоадеров это делать
      },
    ],
  },
};
