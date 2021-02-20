const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
	ProcessorId: String,
    HDDSerialNo: String,
    MACAddress: String,
})

module.exports = mongoose.model("data", dataSchema)