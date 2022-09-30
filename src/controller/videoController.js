export const trending = (req, res) => {
  const videos = [];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("video search");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.send("video edit");
export const remove = (req, res) => res.send("video remove");
export const upload = (req, res) => res.send("video upload");
