const Job = require("../models/Job");

//
// GET ALL JOBS
//
const getJobs = async (req, res) => {

  try {

    const jobs =
      await Job.find();

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};

//
// ADD JOB
//
const addJob = async (req, res) => {

  try {

    const job =
      new Job(req.body);

    const savedJob =
      await job.save();

    res.status(201).json(
      savedJob
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};

//
// EDIT JOB
//
const updateJob =
async (req, res) => {

  try {

    const updatedJob =
      await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(
      updatedJob
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};

//
// DELETE JOB
//
const deleteJob =
async (req, res) => {

  try {

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Job Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};

module.exports = {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
};