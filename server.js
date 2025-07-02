import express from 'express'
import mongoose from 'mongoose';
const app = express();
const PORT = 3000;

import userRoutes from './routes/userRoute.js'
import logger from './middleware/logger.js';

// in-build middleware to parse json
app.use(express.json());

// logger middleware
app.use(logger);

// routes
app.use("/", userRoutes);

// fallback 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB successfully");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT} 🎈🎈`);
  });
})
.catch(err => console.error("MongoDB connection failed", err));










