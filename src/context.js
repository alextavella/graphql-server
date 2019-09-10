const api = require('./services/api');
const { AuthenticationError } = require('./model/Error');

module.exports = async ({ req }) => {
  // get the user token from the headers
  const authorization = req.headers.authorization || '';
  const [, bearerToken] = authorization.split(' ');

  // try to retrieve a user with the token
  const response = await api.get(`/auth?token=${bearerToken}`);
  const { token, user } = response.data;

  // valid
  if (!token) throw new AuthenticationError('You must be logged in');

  // add the user to the context
  const result = { token, user };
  // console.log('result', result);

  // for test
  if (!bearerToken) return { user };

  return result;
};
