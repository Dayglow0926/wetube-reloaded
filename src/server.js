import express from "express";
import logger from "morgan";

const PORT = 4000;
const app = express();
const loggerMiddleware = logger("dev");
app.use(loggerMiddleware);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

//서버를 시작하는 명령어 listen(port,callback)
app.listen(PORT, handleListening);
