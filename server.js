import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

// import authRoutes from "./src/routes/authRoutes.js";
// import sessionRoutes from "./src/routes/sessionRoutes.js";
// import analyticsRoutes from "./src/routes/analyticsRoutes.js";
// import adminRoutes from "./src/routes/adminRoutes.js";
// // import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/session", sessionRoutes);
// app.use("/api/analytics", analyticsRoutes);
// app.use("/api/admin", adminRoutes);
// // app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
