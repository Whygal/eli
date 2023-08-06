import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './server/routes/api.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const dbConnectionURL = process.env.DB_CONECCT;

if (!dbConnectionURL) {
    console.error('DB_CONECCT environment variable is not set.');
    process.exit(1);
}

mongoose.connect(dbConnectionURL)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error(`Error connecting to the database. ${err}`);
    });

app.use(cors());
app.use(
    express.json({
        type: ['application/json', 'application/ld+json'],
    })
);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
