export const storiesPage = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color:orange'>Welcome to storiesPage / ${id}</h1>`
  );
};

export const storiesEditPage = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color:orange'>Welcome to storiesEditPage / ${id}</h1>`
  );
};
export const storiesDelete = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color:orange'>Welcome to storiesDelete / ${id}</h1>`
  );
};
