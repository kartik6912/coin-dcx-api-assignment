const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // allow each IP up to 100 requests per minute
  message: "Too many requests from this IP, please try again after a minute.",
});

module.exports = limiter;
