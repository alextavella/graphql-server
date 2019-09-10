class AuthenticationError extends Error {
  constructor(...args) {
    super(args);
  }
}

module.exports = { AuthenticationError };
