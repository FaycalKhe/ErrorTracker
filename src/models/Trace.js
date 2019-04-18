const mongoose = require('mongoose');


const traceSchema = new mongoose.Schema({
    Oid: Number,
    Priority: Number,
    Message: String,
    Level: Number,
    FunctionName: String,
    Parameters: String,
    ServiceID: String,
    CallStack: String,
    LicenseID: Number,
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now},
    FixedAt: {type: Date, default: null}
});

module.exports = mongoose.model('Trace', traceSchema);
