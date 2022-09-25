export const trending = (req, res) => res.send("trending video Home");
export const search = (req, res) => res.send("video search");
export const see = (req, res) => {
  res.send(`video watch ${req.params.id}`);
};
export const edit = (req, res) => res.send("video edit");
export const remove = (req, res) => res.send("video remove");
export const upload = (req, res) => res.send("video upload");
