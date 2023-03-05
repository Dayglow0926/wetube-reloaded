import express from "express";
import {
  storiesPage,
  storiesEditPage,
  storiesDelete,
} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", storiesPage);
storyRouter.get("/:id/edit", storiesEditPage);
storyRouter.get("/:id/delete", storiesDelete);

export default storyRouter;
