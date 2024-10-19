const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
});

const Url = mongoose.model("Url", urlSchema);

// Route to create a shortened URL
app.post("/", async (req, res) => {
  try {
    const { nanoid } = await import("nanoid");

    const { originalUrl } = req.body;
    let existingUrl = await Url.findOne({ originalUrl });
    // If URL exists, return the existing shortId
    if (existingUrl) {
      return res.json({
        originalUrl,
        shortUrl: `${process.env.HOST}/${existingUrl.shortId}`,
      });
    }
    const shortId = nanoid(7); // Create a short ID with 7 characters
    const newUrl = new Url({ originalUrl, shortId });

    console.log("host: ", process.env.HOST);
    await newUrl.save();
    res.json({ originalUrl, shortUrl: `${process.env.HOST}/${shortId}` });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to redirect using the short URL
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const urlEntry = await Url.findOne({ shortId });

  if (urlEntry) {
    return res.redirect(urlEntry.originalUrl);
  }

  res.status(404).json({ error: "Short URL not found" });
});

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
