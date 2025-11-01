import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.static("views"));

// Serve the HTML upload form
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Handle file upload
app.post("/api/fileanalyse", (req, res) => {
  if (!req.files || !req.files.upfile) {
    return res.json({ error: "No file uploaded" });
  }
  const file = req.files.upfile;
  res.json({
    name: file.name,
    type: file.mimetype,
    size: file.size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
