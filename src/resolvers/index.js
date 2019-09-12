const { merge } = require('lodash');

const productResolver = require('./product');
const stockResolver = require('./stock');

module.exports = merge(
  productResolver,
  stockResolver,
);
