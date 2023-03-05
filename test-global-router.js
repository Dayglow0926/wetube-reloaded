import express from "express";
import {
  test1Controller,
  test2Controller,
  test3Controller,
} from "./test-globalController";

const globalRouter = express.Router();

globalRouter.use(test1Controller, test2Controller, test3Controller);

const paramsHandler = (req, res) => {
  console.log("this is params");
  console.log(req.params);
  res.end();
};
const loginHandler = (req, res) => {
  console.log("this is login");
  res.end();
};
globalRouter.get("/:id(\\d+)", paramsHandler);
globalRouter.get("/login", loginHandler);

export default globalRouter;
