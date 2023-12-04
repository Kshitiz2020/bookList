import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

/* app.listen(PORT, () => {
  console.log(`App is listening to port:${PORT}`);
}); */
app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to backend");
});

app.use("/books", bookRoutes); // end point of api

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the MongoDb database");
    app.listen(PORT, () => {
      console.log(`App is listening to port:${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
