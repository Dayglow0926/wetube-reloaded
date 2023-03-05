import express from "express";
import {
  homePage,
  trendingPage,
  newPage,
  joinPage,
  loginPage,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homePage);
globalRouter.get("/trending", trendingPage);
globalRouter.get("/new", newPage);
globalRouter.get("/join", joinPage);
globalRouter.get("/login", loginPage);

export default globalRouter;
