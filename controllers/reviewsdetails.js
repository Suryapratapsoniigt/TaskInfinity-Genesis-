// controllers/reviewsdetails.js

// import Review from '../models/review.js';
import Review from '../models/review.js';
export const createReview = async (req, res) => {
    const {userId, reviewImage, stars, title, studentsWatched } = req.body;
    console.log(userId,review,reviewImage, stars, title, studentsWatched,"kk")

    if (!userId || !reviewImage) {
        return res.status(400).json({ message: "Review validation failed: userId and reviewImage are required." });
    }
    try {
        // Create a new review instance
        const newReview = new Review({
            userId,
            review,
            reviewImage,
            stars,
            title,
            studentsWatched,
        });

        // Save the review to the database
        const savedReview = await newReview.save();

        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateReview = async (req, res) => {
    const { id } = req.params;
    const {review,reviewImage, stars, title, studentsWatched } = req.body;
    console.log(req.params,req.body,"--------------")
    try {
        // Find the review by ID and update it
        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { review,reviewImage, stars, title, studentsWatched },
            { new: true }
        );

        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteReview = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the review by ID and delete it
        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        // Fetch all reviews
        const reviews = await Review.find();

        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
