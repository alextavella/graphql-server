const ProductAPI = require('./Product');
const StockAPI = require('./Stock');

module.exports = () => ({
  productAPI: new ProductAPI(),
  stockAPI: new StockAPI(),
});;