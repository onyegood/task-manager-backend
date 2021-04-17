import express from "express";
import 'express-async-errors';
import { json } from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { errorHandler, NotFoundError } from "@goodtickets/common";
import { createTaskRouter } from './routes/create-task';
import { deleteTaskRouter } from "./routes/delete-task";
import { updateTaskRouter } from "./routes/update-task";
import { fetchTaskRouter } from "./routes/fetch-task";
import { fetchTasksRouter } from "./routes/fetch-tasks";

const app = express();
app.set("trust proxy", true);

app.use(json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(createTaskRouter);
app.use(deleteTaskRouter);
app.use(updateTaskRouter);
app.use(fetchTaskRouter);
app.use(fetchTasksRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };