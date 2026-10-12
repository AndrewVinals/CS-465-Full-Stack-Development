const fs = require('fs');
const path = require('path');
const mongoose = require('./db');
const Trip = require('./travlr');
const trips = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/trips.json'),'utf8'));
// Safe to rerun: adds missing sample trips without erasing user-created trips.
(async () => {
  await mongoose.connection.asPromise();
  for (const trip of trips) await Trip.updateOne({code:trip.code},{$setOnInsert:trip},{upsert:true,runValidators:true});
  await mongoose.connection.close();
})().catch(async err => { console.error(err); await mongoose.connection.close(); process.exitCode=1; });
