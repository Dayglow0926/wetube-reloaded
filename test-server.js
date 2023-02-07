import express from "express";

const app = express();

const PORT = 4003;

const handleHome = (req, res) => {
  return res.send("<h1 style='color:red;'>Hello! This is HomePage</h1>");
};
const handleAbout = (req, res) => {
  return res.send("<h1 style='color:orange;'>Hello! This is aboutPage</h1>");
};
const handleContact = (req, res) => {
  return res.send("<h1 style='color:yellow;'>Hello! This is ContactPage</h1>");
};
const handleLogin = (req, res) => {
  return res.send("<h1 style='color:green;'>Hello! This is loginPage</h1>");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
