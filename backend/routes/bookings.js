var express = require('express');
const BookingsSchema = require('../models/bookings');
var router = express.Router();
const ShortUniqueId = require('short-unique-id');

router.get('/all', async (req, res) => {
  try {
    const bookings = await BookingsSchema.find({});
    res.json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.post('/search', async (req, res) => {
  try {
    // takes new Date().toDateString()
    const bookings = await BookingsSchema.find(req.body);
    if (bookings.length > 0) {
      res.send(bookings);
    } else {
      res.send([]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

router.post('/create', async (req, res, next) => {
  req.body.shortId = new ShortUniqueId()();
  try {
    const booking = await BookingsSchema.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

router.post('/cancel', async (req, res, next) => {
  try {
    const booking = await BookingsSchema.findOne(req.body);
    console.log(booking);
    if (booking !== null) {
      booking.isDeleted = true;
      booking.save();
    }
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;

// POST "/search" skicka datum och antal personer. Får lediga bord på ett specifikt datum.
// POST "/booking/create" skicka bordsnummer, antal personer, namn, klockslag(18 eller 21) och datum. Får bokningsnummer.
// POST "/booking/cancel" skicka namn, bokningsnummer. Får bekräftelse. softdelete

// GET "/booking/all" får alla bokningar.

// bookings: [
//   {
//     id: string,
//     name: string,
//     Date: date,
//     amount: number,
//     table: number,
//     sitting: number,
//     isDeleted: boolean
//   },

// ]

// /search
// [
//   {
//     table: number,
//     sitting: number
//   }
// ]
