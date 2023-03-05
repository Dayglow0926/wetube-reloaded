export const userPage = (req, res) => {
  return res.send("<h1 style='color: blue'>Welcome to userPage</h1>");
};

export const userViewPage = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color: blue'>Welcome to userViewPage / ${id}</h1>`
  );
};
export const userEditPage = (req, res) => {
  return res.send("<h1 style='color: blue'>Welcome to userEditPage</h1>");
};
