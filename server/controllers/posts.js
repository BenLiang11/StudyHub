import CourseListing from '../models/courseListing.js';

export const getCourses = async (req, res) => {
    try {
        const courseListings = await CourseListing.find();

        res.status(200).json(courseListings);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createCourse = async (req, res) => {
    const course = req.body;

    const newCourse = new CourseListing(course);

    try {
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}