const express = require("express");
const path = require("path");
const cors = require("cors"); // You missed requiring cors
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*',  // Later, change this to your actual domain if needed
  methods: ['GET', 'POST'],
  credentials: true
}));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
const userRoutes = require("./server/routes/user");
const jobRoutes = require("./server/routes/job");

app.use("/user", userRoutes);
app.use("/job", jobRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
