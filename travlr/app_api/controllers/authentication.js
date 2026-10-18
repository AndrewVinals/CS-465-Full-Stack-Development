const User = require('../models/user');
const jwt = require('jsonwebtoken');
const sign = user => jwt.sign({sub:String(user._id),email:user.email,name:user.name},process.env.JWT_SECRET,{expiresIn:'2h'});
exports.register = async (req,res) => {
  // Registration is intentionally not public: create the first admin with npm run create-admin.
  res.status(403).json({message:'Public registration is disabled'});
};
exports.login = async (req,res) => {
  try {
    const {email,password} = req.body || {};
    if(typeof email !== 'string' || typeof password !== 'string' || !email || !password) return res.status(400).json({message:'Email and password required'});
    const user = await User.findOne({email:email.toLowerCase().trim()}).select('+passwordHash');
    if(!user || !(await user.validPassword(password))) return res.status(401).json({message:'Invalid credentials'});
    return res.json({token:sign(user)});
  } catch(err) { console.error(err); return res.status(500).json({message:'Login failed'}); }
};
