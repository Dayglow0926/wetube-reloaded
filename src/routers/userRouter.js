import express from "express";
import {
  edit,
  deleteInfo,
  see,
  logout,
  startGithubLogin,
  callbackGithubLogin,
} from "../controller/userController";

const userRouter = express.Router();
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteInfo);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", callbackGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
