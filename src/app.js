import "express-async-errors";
import express from "express";
import morgan from "morgan";
import studentRoutes from "./routes/student.routes.js";
import { errorHandler } from "./middlewares/error.js";
const app = express();
app.use(express.json()); // parses JSON bodies
app.use(morgan("dev")); // logs every request
// register routes
app.use("/api/students", studentRoutes);
// central error handler
app.use(errorHandler);
export default app;