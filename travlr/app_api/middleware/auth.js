const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
  const match = /^Bearer (.+)$/i.exec(req.headers.authorization || '');
  if(!match) return res.status(401).json({message:'Authentication required'});
  try { req.user = jwt.verify(match[1],process.env.JWT_SECRET,{algorithms:['HS256']}); next(); }
  catch (_) { return res.status(401).json({message:'Invalid or expired token'}); }
};
