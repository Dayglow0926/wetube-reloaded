import express from "express";
import globalRouter from "./challenge/routers/globalRouter";
import userRouter from "./challenge/routers/userRouter";
import storyRouter from "./challenge/routers/storyRouter";

const PORT = 4003;
const app = express();

/** */
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);
/** */

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
