const express = require('express');
const app = express();
const port = 3001;

app.use(require('./routes'));

app.listen(port, () => console.log("App on http://localhost:3001"));