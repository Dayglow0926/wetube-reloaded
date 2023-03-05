import express from "express";

const videoRouter = express.Router();

const watchController = () => {
  console.log("watchController check");
};
videoRouter.get("/watch", watchController);

export default videoRouter;
