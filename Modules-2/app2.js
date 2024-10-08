const config = require("./config")


console.log(`App running on port: ${config.port}`);
console.log(`Database URL: ${config.db_url}`);
console.log(`Secret Key: ${config.secret_key}`);