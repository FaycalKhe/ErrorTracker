module.exports = (app) => {
    const traces = require('../controllers/trace.controller');
    
    //Create new trace 
    app.post('/trace', traces.create);

    //Retrieve all traces
    app.get('/trace', traces.findAll);
    app.get('/trace/:traceId', traces.findOne);
    app.put('/trace/:traceId', traces.update);
    app.delete('/trace/:traceId', traces.delete);
}