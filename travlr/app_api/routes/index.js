const router = require('express').Router();
const trips = require('../controllers/trips');
router.route('/trips').get(trips.tripsList).post(trips.tripsAddTrip);
router.route('/trips/:tripCode').get(trips.tripsFindByCode).put(trips.tripsUpdateTrip).delete(trips.tripsDeleteTrip);
module.exports = router;
