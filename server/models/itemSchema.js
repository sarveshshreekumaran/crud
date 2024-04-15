const mongoose = require("mongoose");
const { Schema } = mongoose

const itemSchema = new Schema({
    title: String,
    subtitle: String,
    date: { type: Date, default: Date.now }
}, { timestamps: true })

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

