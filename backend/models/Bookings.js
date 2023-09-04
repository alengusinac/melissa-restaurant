const mongoose = require('mongoose');

const BookingsSchema = mongoose.Schema({
  name: {
    shortId: String,
    name: String,
    Date: Date,
    amount: Number,
    table: Number,
    sitting: Number,
    isDeleted: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('bookings', BookingsSchema);
