import "dotenv/config";
import "./db";
import Video from "./models/Video";
import app from "./server";

const PORT = 4002;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} π`);

//μλ²λ₯Ό μμνλ λͺλ Ήμ΄ listen(port,callback)
app.listen(PORT, handleListening);
