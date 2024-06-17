// models/review.js

import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    review: { type: Number, required: true },
    reviewImage: { type: String, required: true },
    stars: { type: Number, required: true },
    title: { type: String, required: true },
    studentsWatched: { type: Number, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;