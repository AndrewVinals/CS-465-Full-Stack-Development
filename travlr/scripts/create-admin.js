require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../app_api/models/user');
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout});
const ask = question => new Promise(resolve => rl.question(question,resolve));
(async()=>{
 try {
  const name = (await ask('Admin name: ')).trim();
  const email = (await ask('Admin email: ')).trim().toLowerCase();
  const password = await ask('Admin password (min 12 characters): ');
  if(!name || !/^\S+@\S+\.\S+$/.test(email) || password.length<12) throw Error('Name, valid email and 12-character password required');
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/travlr');
  if(await User.exists({email})) throw Error('Email already registered');
  const user = new User({name,email});await user.setPassword(password);await user.save();
  console.log('Admin account created');
 } catch(err) { console.error(err.message);process.exitCode=1; }
 finally {rl.close();await mongoose.disconnect();}
})();
