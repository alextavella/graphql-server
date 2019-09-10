const { merge } = require('lodash');

const authorResolver = require('./author');
const bookResolver = require('./book');
const productResolver = require('./product');
const stockResolver = require('./stock');

module.exports = merge(
  authorResolver,
  bookResolver,
  productResolver,
  stockResolver
);