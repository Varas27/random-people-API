const express = require('express');
const app = express();
const serverRoutes = require('./routes')
const cors = require('cors')

const PORT = 8080

app.use(cors());
app.use(express.json());

serverRoutes(app);

app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`)
})