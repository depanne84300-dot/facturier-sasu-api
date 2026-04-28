app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(require("path").join(__dirname, "facturier-sasu.html"));
});