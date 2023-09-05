const mongoose = require('mongoose');

const BookingsSchema = mongoose.Schema({
  shortId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  table: { type: Number, required: true },
  sitting: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('bookings', BookingsSchema);
