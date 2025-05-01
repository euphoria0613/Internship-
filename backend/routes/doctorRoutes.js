const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

router.post('/add-doctor', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/list-doctor-with-filter', async (req, res) => {
  const { specialty, location, minRating, page = 1, limit = 10 } = req.query;

  const query = {};
  if (specialty) query.specialty = specialty;
  if (location) query.location = location;
  if (minRating) query.rating = { $gte: Number(minRating) };

  try {
    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Doctor.countDocuments(query);

    res.json({ doctors, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
