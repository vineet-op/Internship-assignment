const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const PORT = 3000;
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

//Defining The Schema

const ImageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Image = mongoose.model("Image", ImageSchema);

const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));

app.post("/upload", upload.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const image = new Image({
    name: originalname,
    data: await readFile(path),
  });

  try {
    await image.save();
    res.status(200).json({ message: req.file });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image" });
  }
});

app.put("/image/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;

  try {
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    if (req.file) {
      const { originalname, path } = req.file;
      image.name = originalname;
      image.data = await readFile(path);
    }

    await image.save();

    res.status(200).json({ message: "Image updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating image" });
  }
});

// Function to read file asynchronously
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

app.get("/image/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.contentType("image/jpeg").send(image.data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving image" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
