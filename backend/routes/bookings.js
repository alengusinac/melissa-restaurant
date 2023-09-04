var express = require('express');
const BookingsSchema = require('../models/bookings');
var router = express.Router();
const ShortUniqueId = require('short-unique-id');

router.post('/create', async (req, res, next) => {
  req.body.shortId = new ShortUniqueId()();
  await BookingsSchema.create(req.body)
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
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
