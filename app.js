import express from "express"
import { getDistance } from "./getDistance.js";
const app = express();

app.use(express.json())

app.post("/addSchool", (req, res) => {
  const db = req.app.locals.db;

  const { name, address, latitude, longitude } = req.body;

  if (
    !name ||
    !address ||
    latitude === undefined ||
    longitude === undefined
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Latitude and Longitude must be numbers" });
  }

  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "DB error" });
    }

    res.json({
      message: "School added successfully",
      id: result.insertId
    });
  });
});

app.get("/listSchools", (req, res) => {
  const db = req.app.locals.db;

  const { latitude, longitude } = req.query;

  if (
    latitude === undefined ||
    longitude === undefined ||
    isNaN(latitude) ||
    isNaN(longitude)
  ) {
    return res.status(400).json({
      error: "Valid latitude and longitude are required"
    });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "DB error" });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const sortedSchools = results
      .map((school) => {
        const distance = getDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );

        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
});

app.get("/", (req, res) => {
  res.send("School API is running");
});

export {app}