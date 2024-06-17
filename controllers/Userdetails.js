import User from '../models/user.js';

export const Userdetails = async (req, res) => {
// Route to get all users
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};