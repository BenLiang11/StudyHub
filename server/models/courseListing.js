import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: String,
    completed: Boolean,
});
  
const CourseListing = mongoose.model('CourseListing', courseSchema);

export default CourseListing;