const Rating = require("../models/rating.model");

const addRating = async (req, res) => {
    try {
        const { productId, userId, rating } = req.body;
        const newRating = await Rating.create({ productId, userId, rating });
        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeRating = async (req, res) => {
    try {
        const { productId, userId } = req.params;
        const rating = await Rating.findOneAndDelete({ productId, userId });
        if (!rating) return res.status(404).json({ error: "Rating not found" });
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addRating,
    removeRating,
}