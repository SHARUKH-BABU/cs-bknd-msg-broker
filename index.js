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
    axios.post('http://localhost:8000/events', event); // snippet service
    axios.post('http://localhost:8001/events', event); // comment service
    axios.post('http://localhost:8002/events', event); // query service

    res.status(200).json({ status: 'OK' });
});


app.listen(PORT, () => {
  console.log(`Message broker is running on port ${PORT}`);
});