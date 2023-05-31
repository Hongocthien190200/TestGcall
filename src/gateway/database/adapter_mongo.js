// src/gateway/database/adapter_mongo.js


const mongoose = require("mongoose");
async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
        console.log("Connected to mongodb Successfully");
    } catch (error) {
        console.log("failed to connect to mongodb");
    }
}
// Định nghĩa schema và model cho collection Calllog
const calllogSchema = new mongoose.Schema({
    phoneNumber: String,
    callTime: Date,
    totalDuration: Number,
});

module.exports = {
    connect,
    Calllog: mongoose.model('Calllog', calllogSchema)
};