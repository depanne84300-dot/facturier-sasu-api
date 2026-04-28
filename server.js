const express = require("express");
const path = require("path");

const app = express();

// ✅ IMPORTANT : dossier statique
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "facturier-sasu.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});