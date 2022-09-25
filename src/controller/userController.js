export const join = (req, res) => res.send("user join");
export const login = (req, res) => res.send("user login");
export const logout = (req, res) => res.send("user logout");

export const edit = (req, res) => res.send("user edit");
export const deleteInfo = (req, res) => res.send("user delete");

export const see = (req, res) => {
  res.send(`user id: #${req.param.id}`);
};
