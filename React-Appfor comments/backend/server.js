import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js'
import { connectDB } from "./config/db.js";
import commentsRoutes from "./routes/comments.js";



dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/users", authRoutes);
app.use("/api/comments", commentsRoutes);

// GLOBAL ERROR HANDLER (ADD THIS)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err.stack);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});


connectDB();

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
