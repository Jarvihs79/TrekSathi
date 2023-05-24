const express = require('express');
const router = express.Router();
const Query = require('../model/query');

router.post('/submit-query', (req, res) => {
  const { email, query } = req.body;

  // Create a new query document
  const newQuery = new Query({
    email,
    query,
  });

  // Save the query to the database
  newQuery.save()
    .then((savedQuery) => {
      return res.status(200).json({ message: 'Query saved successfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: 'Failed to save the query' });
    });
});

router.get('/queries', (req, res) => {
  // Retrieve all queries from the database
  Query.find()
    .then((queries) => {
      return res.status(200).json({ queries });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve queries' });
    });
});

module.exports = router;
