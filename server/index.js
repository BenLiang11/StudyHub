import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/courses', postRoutes);

app.use(cors());
app.use(express.json());

// Connect to MongoDB
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('Connected to MongoDB')})
    .catch((error) => {console.error('Error connecting to MongoDB:', error)});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});