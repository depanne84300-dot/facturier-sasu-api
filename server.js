const express = require("express");
const path = require("path");

const app = express();

// ✅ sert logo.png + css + html + tout le dossier
app.use(express.static(__dirname));

// ✅ page principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "facturier-sasu.html"));
});

// ✅ port Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});