require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());
app.use("/api/contact", contactRouter);

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from the Node.js backend!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
