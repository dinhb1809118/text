const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Brand = new Schema({
    name: { type: String },
    image: { type: String, require: true },
    slug: { type: String, unique: true, slug: "name" }
},
    {
        collection: 'trademarkdetails',
        timestamps: true
    }
)
module.exports = mongoose.model('trademarkdetails', Brand);