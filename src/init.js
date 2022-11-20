import "dotenv/config";
import "./db";
import Video from "./models/Video";
import app from "./server";

const PORT = 4002;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

//서버를 시작하는 명령어 listen(port,callback)
app.listen(PORT, handleListening);
