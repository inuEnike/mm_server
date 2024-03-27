import express, { Express, Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errMessage = err.message || " something Went Wrong";
  const errStatus = err.status || 500;
  const errStack =
    process.env.NODE_ENV === "DEVELOPMENT" ? err.stack : " " || {};

  res.status(errStatus).json({
    Success: false,
    statusCode: errStatus,
    Message: errMessage,
    stackTrace: errStack,
  });
};

export default errorHandler;
