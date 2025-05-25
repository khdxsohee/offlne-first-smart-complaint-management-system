const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let complaints = [];

app.get('/complaints', (req, res) => {
  res.json(complaints);
});

app.post('/complaints', (req, res) => {
  const { title, description, timestamp } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description required' });
  }

  const complaint = {
    id: complaints.length + 1,
    title,
    description,
    timestamp: timestamp || new Date().toISOString()
  };

  complaints.push(complaint);
  console.log('New complaint added:', complaint);
  res.status(201).json({ message: 'Complaint added', complaint });
});

app.listen(port, () => {
  console.log(`Complaint backend running at http://localhost:${port}`);
});
