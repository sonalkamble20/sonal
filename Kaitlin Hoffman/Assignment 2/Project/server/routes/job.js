const express = require("express");
const Job = require("../models/job");
const router = express.Router();

// Get all jobs for a specific user
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const jobs = await Job.getAllJobsByUser(userId);
    res.send(jobs);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Add a new job
router.post("/", async (req, res) => {
  try {
    const { jobname, description, userId } = req.body;

    if (!jobname || !userId) {
      return res.status(400).json({ message: "Job name and user ID are required" });
    }

    const newJob = await Job.addJob({ jobname, description, userId });
    res.status(201).json(newJob);  // Send back the inserted job
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, could not add job" });
  }
});

module.exports = router;
