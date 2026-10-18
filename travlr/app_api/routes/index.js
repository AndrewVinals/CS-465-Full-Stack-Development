const router = require('express').Router();
const trips = require('../controllers/trips');
const authentication = require('../controllers/authentication');
const auth = require('../middleware/auth');
router.post('/login', authentication.login);
router.post('/register', authentication.register);
router.route('/trips').get(trips.tripsList).post(auth,trips.tripsAddTrip);
router.route('/trips/:tripCode').get(trips.tripsFindByCode).put(auth,trips.tripsUpdateTrip).delete(auth,trips.tripsDeleteTrip);
module.exports = router;
