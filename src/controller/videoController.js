import Video from "../models/Video";

export const home = async (req, res) => {
  console.log("Start");
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  console.log("Database Finish");
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("video search");
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Not Found Page" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Not Found Page" });
  }
  console.log(video);
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Not Found Page" });
  }

  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });

  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  // here we will add a video to the videos array.
  const { title, description, hashtags } = req.body;

  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });

    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const searchVideo = async (req, res) => {
  const { title } = req.query;
  let videos = [];
  if (title) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(title, "i"),
      },
    });
  }

  return res.render("search", { pageTitle: "Search", videos });
};
