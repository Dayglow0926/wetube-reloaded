import express from "express";
import { edit, deleteInfo, see, logout } from "../controller/userController";

const userRouter = express.Router();
userRouter.get("/:id", see);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteInfo);
userRouter.get("/logout", logout);

export default userRouter;
