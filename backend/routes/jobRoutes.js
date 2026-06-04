const express =
require("express");

const router =
express.Router();

const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require(
  "../controllers/jobController"
);

//
// GET ALL JOBS
//
router.get(
  "/",
  getJobs
);

//
// ADD JOB
//
router.post(
  "/",
  addJob
);

//
// EDIT JOB
//
router.put(
  "/:id",
  updateJob
);

//
// DELETE JOB
//
router.delete(
  "/:id",
  deleteJob
);

module.exports =
router;