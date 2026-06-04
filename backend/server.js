require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);
app.use("/api/users", userRoutes);
app.use("/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});