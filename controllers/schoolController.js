const db = require('../db');


// Controller to add a new school
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Basic validation
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: 'All fields (name, address, latitude, longitude) are required' });
  }

  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;
  const values = [name, address, latitude, longitude];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting school:', err);
      return res.status(500).json({ error: 'Failed to add school' });
    }

    return res.status(201).json({
      message: 'School added successfully',
      schoolId: result.insertId
    });
  });
};

// Controller to list schools sorted by proximity
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required in query parameters' });
  }

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  // MySQL Haversine formula to calculate distance in kilometers
  const query = `
    SELECT *,
      (
        6371 * ACOS(
          COS(RADIANS(?)) * COS(RADIANS(latitude)) *
          COS(RADIANS(longitude) - RADIANS(?)) +
          SIN(RADIANS(?)) * SIN(RADIANS(latitude))
        )
      ) AS distance
    FROM schools
    ORDER BY distance ASC
  `;

  db.query(query, [lat, lon, lat], (err, results) => {
    if (err) {
      console.error('Error fetching schools:', err);
      return res.status(500).json({ error: 'Failed to fetch schools' });
    }

    return res.status(200).json({
      message: 'Schools retrieved successfully',
      data: results
    });
  });
};
