const app = require('express')();
const bodyParser = require('body-parser');

// Adding the body parser middel ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(3000, () => console.log('start listning on port 3000'));