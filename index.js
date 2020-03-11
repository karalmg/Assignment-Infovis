const express = require('express');
const path = require('path');

//denna behöver du egentligen inte
const logger = require('./middleware/logger');

const app = express();

// Init middleware (och inte den här heller)
app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






