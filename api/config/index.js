const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'production',
    CORS: process.env.CORS || '*'
}