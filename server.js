//set requirements
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//create a port
const exp = express();
const PORT = process.env.PORT || 2000;

//body parsing, static, and route middleware
exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));
exp.use(express.static('public'));
exp.use('/api', apiRoutes);
exp.use('/', htmlRoutes);

//console.log to show app is listening on PORT
exp.listen(PORT, () => console.log(`I am listening on PORT: ${PORT}`));