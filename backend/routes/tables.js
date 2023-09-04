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
