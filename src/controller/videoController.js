let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "5 minutes age",
    views: 59,
    id: 1,
  },
  {
    title: "Seconds Video",
    rating: 4,
    comments: 5,
    createdAt: "3 minutes age",
    views: 49,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 2,
    comments: 1,
    createdAt: "1 minutes age",
    views: 50,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("video search");
export const watch = (req, res) => {
  const { id } = req.params;

  const video = videos[id - 1];

  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;

  return res.redirect(`/video/${id}`);
};
