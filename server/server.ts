import express from "express";
import { trpcMiddleware } from "./router";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/trpc", trpcMiddleware);
app.listen(5000, () => console.log("listening on port " + 5000));
