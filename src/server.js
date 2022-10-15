import "./db";
import Video from "./models/video";
import express from "express";
import logger from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4001;
const app = express();
const loggerMiddleware = logger("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

//서버를 시작하는 명령어 listen(port,callback)
app.listen(PORT, handleListening);
