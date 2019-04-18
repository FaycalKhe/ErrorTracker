module.exports = (app) => {
    const traces = require('../controllers/trace.controller');
    
    //Create new trace 
    app.post('/trace', traces.create);

    //Retrieve all traces
    app.get('/trace', traces.findAll);

    //Retrieve specefic trace
    app.get('/trace/:traceId', traces.findOne);
}