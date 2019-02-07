const trace = require('../models/Trace');


module.exports = {
    create: (req, res) => {
        //validate request
        if(!req.body.content)
            return res.status(400).send({
                message: 'Trace content cannot be empty'
            });
        
        const newTrace = new trace({
            Priority: req.body.Priority || 0,
            Message: req.body.Message || "Empty message",
            Status: req.body.Status || 0,
            Note: req.body.Note || "Empty note",
            Type: req.body.Type || 0,
            Service: req.body.Service || "Empty service"
        });
        //Save the new trace to database

        newTrace.save()
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the trace"
                });
            });

    },
    findAll: (req, res) => {
        trace.find()
            .then(data => res.send(data))
            .catch(err => res.status(500).send({
                message: err.message || "Some error occurred while retrieving traces"
            }))
    },
    findOne: (req, res) => {
        trace.findById(req.params.traceId)
            .then( trace => {
                if(!trace)
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                
                res.send(trace);
            })
            .catch(err => {
                if(err.kind === 'ObjectId')
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                return res.status(500).send({
                    message: "Error while retrieving trace with id " + req.params.traceId
                });
            });
    },
    update: (req, res) => {
        if(!req.body.content)
            return res.status(400).send({
                message: "Trace content cannot be empty"
            });
        
        trace.findById(req.params.traceId, {
            Priority: req.body.Priority || 0,
            Message: req.body.Message || "Empty message",
            Status: req.body.Status || 0,
            Note: req.body.Note || "Empty note",
            Type: req.body.Type || 0,
            Service: req.body.Service || "Empty service"
        }, {new: true})
            .then(trace => {
                if(!trace)
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                res.send(trace);
            })
            .catch(err => {
                if(err.kind === 'ObjectId'){
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                }
                return res.status(500).send({
                    message: "Error updating trace with id " + req.params.traceId
                });
            });
    },
    delete: (req, res) => {
        trace.findByIdAndRemove(req.params.traceId)
            .then(trace => {
                if(!trace)
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                return res.send({message: "Trace deleted successfully!"});
            })
            .catch(err => {
               if(err.kind === 'ObjectId' || err.name === 'NotFound') 
                    return res.status(404).send({
                        message: "Trace not found with id " + req.params.traceId
                    });
                return res.status(500).send({
                    message: "Could not delete trace with id " + req.params.traceId
                })
            });
    }
}