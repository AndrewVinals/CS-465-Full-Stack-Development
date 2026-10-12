const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST || '127.0.0.1'}/travlr`;
mongoose.connect(dbURI).catch(err => console.error('MongoDB connection failed:',err.message));
mongoose.connection.on('connected', () => console.log('Connected to Travlr database'));
const shutdown = async () => { await mongoose.connection.close(); process.exit(0); };
process.once('SIGINT',shutdown);
process.once('SIGTERM',shutdown);
require('./travlr');
module.exports = mongoose;
