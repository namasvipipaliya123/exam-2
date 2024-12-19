const { Router } = require('express');
const { addRating, removeRating } = require('../controller/rating.controller');

const ratingRouter = Router();

ratingRouter.post('/addrating', addRating);
ratingRouter.delete('/delete/:productId', removeRating);

module.exports = ratingRouter;