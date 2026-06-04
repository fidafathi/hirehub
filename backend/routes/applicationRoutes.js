const express = require("express");
const router = express.Router();

const Application =
require("../models/Application");

const {
  applyJob,
  getApplications,
  acceptApplication,
  rejectApplication,
} = require(
  "../controllers/applicationController"
);

//
// Apply job
//
router.post(
  "/",
  applyJob
);

//
// Get all applications
//
router.get(
  "/",
  getApplications
);

//
// Get logged user applications
//
router.get(
  "/user/:email",
  async (req, res) => {

    try {

      const applications =
        await Application.find({
          email:
            req.params.email,
        });

      res.json(
        applications
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

//
// Accept application
//
router.put(
  "/accept/:id",
  acceptApplication
);

//
// Reject application
//
router.put(
  "/reject/:id",
  rejectApplication
);

module.exports = router;