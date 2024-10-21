const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger");
const cors = require("cors");

const corsOptions = {
  origin: "https://link-shortened-be-a8615336383d.herokuapp.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

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

    await newUrl.save();
    res.json({ originalUrl, shortUrl: `${process.env.HOST}/${shortId}` });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ error });
  }
});

// Route to redirect using the short URL
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  try {
    const urlEntry = await Url.findOne({ shortId });

    if (urlEntry) {
      res.json({ orignalUrl: urlEntry.originalUrl });
    } else {
      const error = new Error("Short URL not found");
      error.status = 404;
      throw error;
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500).json({ error: error.message });
  }
});

const port = process.env.PORT;

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB...");

    app.listen(port, () => {
      console.log("Server running...");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
