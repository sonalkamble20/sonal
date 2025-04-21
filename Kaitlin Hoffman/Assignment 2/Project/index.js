// Original version of server.js
const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");

app.use(cors({
  origin: '*',  // Allow all origins (you can restrict this later to specific domains)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true  // Allow cookies if needed
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const userRoutes = require("./server/routes/user");
const jobRoutes = require("./server/routes/job");

// Define routes
app.use("/user", userRoutes);
app.use("/job", jobRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
