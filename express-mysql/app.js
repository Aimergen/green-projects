import express, { json } from "express";
import cors from "cors";

import categoryRouter from "./routes/category-router.js";

const app = express();
app.use(cors());
app.use(json());

app.use("/categories", categoryRouter);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
