const ProductAPI = require('./Product');
const StockAPI = require('./Stock');
const BookAPI = require('./Book');
const AuthorAPI = require('./Author');

module.exports = () => ({
  productAPI: new ProductAPI(),
  stockAPI: new StockAPI(),
  bookAPI: new BookAPI(),
  authorAPI: new AuthorAPI(),
});
