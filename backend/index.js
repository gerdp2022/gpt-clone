// import "dotenv/config";

// import express from "express";
// import db from "./db/db.config.js";
// import cors from "cors";
// import { errorHandler } from "./src/middleware/error-handler.js";

// import mainRouter from "./src/api/main.routes.js";

// require("dotenv").config(); // at the very top
// const cors = require("cors");
// app.use(cors({ origin: process.env.FRONTEND_URL })); // before your routes

// const PORT = process.env.PORT || 3000; // replaces any fixed port
// app.listen(PORT, () => console.log("Server running on " + PORT));

// const app = express();

// // Allow resources from your frontend port
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   }),
// );

// app.use(express.json());

// app.use("/api", mainRouter);

// //* Final middleware for error handling
// app.use(errorHandler);

// async function startServer() {
//   try {
//     const connection = await db.getConnection();
//     connection.release();
//     // console.log("db connected");

//     app.listen(3888, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`Server running on port https://localhost:3888`);
//     });
//   } catch (error) {
//     console.error(`Error starting server:`, error.message);
//   }
// }

// startServer();

import "dotenv/config";

import express from "express";
import cors from "cors";
import db from "./db/db.config.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import mainRouter from "./src/api/main.routes.js";

const app = express();

// Allowed frontend address(es). Separate several with commas.
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",")
  .map((url) => url.trim().replace(/\/$/, ""));

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use("/api", mainRouter);

//* Final middleware for error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3888;

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1);
  }
}

startServer();
