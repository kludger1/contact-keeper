const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @descirotion Get all users contacts
// @access Private

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

router.post('/', (req, res) => {
  res.send('Add contact');
});

router.put('/:id', (req, res) => {
  res.send('update contact');
});

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
