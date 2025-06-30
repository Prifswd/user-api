import express from 'express'
const app = express();
const PORT = 3000;

import userRoutes from './routes/userRoute.js'
import logger from './middleware/logger.js'

// built-in JSON parser
app.use(express.json());

// custom logger
app.use(logger);

// user routes
app.use("/", userRoutes);

// route for 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// startin server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}🎈🎈`);
});



