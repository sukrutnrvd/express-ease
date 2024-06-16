import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import router from "routes/routes";
import errorHandler from "middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.all("*", (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist"));
});
app.use(errorHandler);

export default app;
