require("dotenv/config");
require("express-async-errors");
const express = require("express");

const { routes } = require('./routes/index.js');
const { AppError } = require('./utils/AppError.js');

const uploadConfig = require('./configs/upload.js');

const path = require('path');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")))

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      "status": "error",
      "message": error.message
    })
  }
  console.error(error);

  return response.status(500).json({
    "status": "error",
    "message": "Internal Server Error"
  })
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));