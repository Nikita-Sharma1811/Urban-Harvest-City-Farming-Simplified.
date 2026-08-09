const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(
      null,
      path.join(__dirname, "../uploads")
    );

  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() +
      "-" +
      file.originalname.replace(/\s+/g, "-");

    cb(null, uniqueName);

  }

});


const upload = multer({

  storage: storage,

  fileFilter: function (req, file, cb) {

    if (file.mimetype.startsWith("image/")) {

      cb(null, true);

    } else {

      cb(new Error("Only image files are allowed"), false);

    }

  }

});


module.exports = upload;