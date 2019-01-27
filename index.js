const dbConfig = require('./config/database.config');
const app = require('express')();
const bodyParser = require('body-parser');

//Adding mongodb dependency
const mongoose = require('mongoose');

//Starting mongodb connection
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now ...', err);
        process.exit();
    });


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./routers/trace.routes')(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});