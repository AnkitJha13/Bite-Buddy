import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/food.route.js";
import userRouter from "./routes/user.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDb();

// API Endpoints

// Food API
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

// User API
app.use("/api/user", userRouter);

// Cart API
app.use("/api/cart", cartRouter);

// Order API
app.use("/api/order", orderRouter);

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Hello");
  console.log("hello");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on: ${process.env.DOMAIN || `http://localhost:${port}`}`);
});
