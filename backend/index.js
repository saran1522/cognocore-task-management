import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
const app = express();
dotenv.config({ path: ".env" });
app.use(cors());

app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

//connecting to database and starting server
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//importing routes
import taskRouter from "./routes/task.route.js";

// declaring routes
app.use("/api", taskRouter);
