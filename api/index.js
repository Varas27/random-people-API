const express = require('express');
const app = express();
const serverRoutes = require('./routes');
const cors = require('cors');
const config = require('./config');

app.use(cors(config.CORS));
app.use(express.json());

serverRoutes(app);

app.listen(process.env.PORT || config.PORT, () => {
    console.log(`Connected to http://localhost:${config.PORT}`)
})