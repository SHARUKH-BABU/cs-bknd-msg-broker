import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/events', (req, res) => {
    const event = req.body;
    axios.post('https://cs-bknd-snippet.vercel.app/events', event); // snippet service
    axios.post('https://cs-bknd-comments.vercel.app/events', event); // comment service
    axios.post('https://cs-bknd-query.vercel.app/events', event); // query service

    res.status(200).json({ status: 'OK' });
});


app.listen(PORT, () => {
  console.log(`Message broker is running on port ${PORT}`);
});