const mongoose = require('mongoose');


const traceSchema = new mongoose.Schema({
    Priority: Number,
    Message: String,
    Status: Number,
    Note: String,
    Type: Number,
    Service: String,
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now},
    FixedAt: {type: Date, default: null}
});

module.exports = mongoose.model('Trace', traceSchema);
