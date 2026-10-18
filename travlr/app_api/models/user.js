const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name: {type:String,required:true},
  email: {type:String,required:true,unique:true,lowercase:true,trim:true},
  passwordHash: {type:String,required:true,select:false}
});
userSchema.methods.setPassword = async function(password) { this.passwordHash = await bcrypt.hash(password, 12); };
userSchema.methods.validPassword = function(password) { return bcrypt.compare(password, this.passwordHash); };
module.exports = mongoose.model('User',userSchema);
