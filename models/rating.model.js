const { default: mongoose } = require("mongoose");

const RatingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
   
});

const Rating = mongoose.model("Rating", RatingSchema);
module.exports = Rating;