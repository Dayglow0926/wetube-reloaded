import Video from "../models/Video";

export const home = async (req, res) => {
  console.log("Start");
  const videos = await Video.find({});
  console.log("Database Finish");
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("video search");
export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  return res.redirect("/");
};
