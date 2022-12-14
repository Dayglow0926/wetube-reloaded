import express from "express";
import {
  deleteInfo,
  see,
  logout,
  startGithubLogin,
  callbackGithubLogin,
  postEdit,
  getEdit,
} from "../controller/userController";

const userRouter = express.Router();
userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/delete", deleteInfo);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", callbackGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
