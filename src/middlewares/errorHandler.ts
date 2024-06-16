import { ErrorRequestHandler } from "express";
import { HttpError } from "http-errors";

const errorHandler: ErrorRequestHandler = (err: HttpError, req, res, next) => {
  res.status(err.statusCode).json({
    message: err.message,
  });
};

export default errorHandler;
