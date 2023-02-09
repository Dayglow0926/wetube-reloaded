import express from "express";

const app = express();

app.set("trust proxy", false);
const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.url}`);
  next();
};
const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(
    `Time: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  );
  next();
};
const securityLogger = (req, res, next) => {
  let secureMessage = "Insecure";
  if (req.secure) secureMessage = "secure";
  console.log(secureMessage);
  next();
};

// protectedMiddleware 첫번째 방법
const protectedMiddleware = (req, res, next) => {
  if (req.url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};
// protectedMiddleware 두번째 방법
const protectedMiddleware2 = (req, res, next) => {
  return res.send("<h1>Not Allowed 2</h1>");
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectedMiddleware);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));
app.get("/protected2", protectedMiddleware2, (req, res) =>
  res.send("<h1>Protected2</h1>")
);

// Codesandbox gives us a PORT :)
app.listen(4003, () => console.log(`${4003} Listening!✅`));
