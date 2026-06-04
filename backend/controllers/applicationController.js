const Application = require("../models/Application");

//
// APPLY JOB
//
const applyJob = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// GET ALL APPLICATIONS (Recruiter dashboard)
//
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ _id: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ACCEPT APPLICATION
//
const acceptApplication = async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status: "Accepted" },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// REJECT APPLICATION
//
const rejectApplication =
async (req, res) => {

  try {

    await Application.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
      "Application Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};

module.exports = {
  applyJob,
  getApplications,
  acceptApplication,
  rejectApplication,
};