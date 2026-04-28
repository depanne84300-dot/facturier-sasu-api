const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// 🔥 DEBUG OBLIGATOIRE
app.get("/test", (req, res) => {
  res.send("OK SERVER WORKING 🚀");
});

// 🔥 IMPORTANT : sert les fichiers du dossier
app.use(express.static(__dirname));

// 🔥 PAGE PRINCIPALE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "facturier-sasu.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});