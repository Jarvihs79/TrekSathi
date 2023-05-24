const express = require('express');
const router = express.Router();
const Trek = require('../model/trekdata');

// Route to submit trek data
router.post('/submitTrekData', async (req, res) => {
  try {
    // Extract trek data from the request body
    const { email, trekName, trekDateTime, startingPoint, endPoint, trekDifficulty, moreInfo } = req.body;

    // Create a new Trek document
    const trek = new Trek({
      email,
      trekName,
      trekDateTime,
      startingPoint,
      endPoint,
      trekDifficulty,
      moreInfo,
    });

    // Save the trek data to the database
    await trek.save();

    res.status(201).json({ message: 'Trek data submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all trek data
router.get('/treks', async (req, res) => {
  try {
    // Retrieve all trek data from the database
    const treks = await Trek.find();

    res.json(treks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
