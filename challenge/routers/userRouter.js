import express from "express";
import {
  userPage,
  userViewPage,
  userEditPage,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userPage);
userRouter.get("/edit-profile", userEditPage);
userRouter.get("/:id", userViewPage);

export default userRouter;
