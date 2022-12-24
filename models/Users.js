const mongoose = require('mongoose');
mongoose.pluralize(null);
const Schema = mongoose.Schema;

const QuerySchema = new Schema({
   fullname: String,
   usern: String,
   dept:String,
   BCP:Number,
   BOI:Number,
   Math:Number,
   es:Number,
   FEEE:Number,
   EG:Number,
   IC:Number
}, { versionKey: false }, { supressReservedKeysWarning: true })


const QueryModel = mongoose.model("Adding", QuerySchema);
module.exports = QueryModel;