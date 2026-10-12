const Trip = require('../models/travlr');
const fields = ['code','name','length','start','resort','perPerson','image','description'];
const payload = body => Object.fromEntries(fields.filter(key => body[key] !== undefined).map(key => [key, body[key]]));
const fail = (res, err) => res.status(err.code === 11000 ? 409 : ['ValidationError','CastError'].includes(err.name) ? 400 : 500).json({message: err.code === 11000 ? 'Trip code already exists' : err.message});
const tripsList = async (req,res) => { try { res.json(await Trip.find({}).exec()); } catch(err) { fail(res,err); } };
const tripsFindByCode = async (req,res) => { try { const trip = await Trip.findOne({code:req.params.tripCode}).exec(); if (!trip) return res.status(404).json({message:'Trip not found'}); res.json(trip); } catch(err) { fail(res,err); } };
const tripsAddTrip = async (req,res) => { try { const trip = await Trip.create(payload(req.body)); res.status(201).json(trip); } catch(err) { fail(res,err); } };
const tripsUpdateTrip = async (req,res) => { try {
  const data = payload(req.body);
  // A PUT replaces all editable fields; preserve the stable identifier.
  data.code = req.params.tripCode;
  for (const field of fields) if (data[field] === undefined || data[field] === '') return res.status(400).json({message:field + ' is required'});
  const trip = await Trip.findOneAndUpdate({code:req.params.tripCode},{$set:data},{new:true,runValidators:true}).exec();
  if (!trip) return res.status(404).json({message:'Trip not found'});
  res.json(trip);
} catch(err) { fail(res,err); } };
const tripsDeleteTrip = async (req,res) => { try { const trip = await Trip.findOneAndDelete({code:req.params.tripCode}).exec(); if (!trip) return res.status(404).json({message:'Trip not found'}); res.status(204).end(); } catch(err) { fail(res,err); } };
module.exports = {tripsList,tripsFindByCode,tripsAddTrip,tripsUpdateTrip,tripsDeleteTrip};
