import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export const uploadImageCloudinaryMiddleware = (req, res, next) => {
  upload.single("picture")(req, res, (error) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: "File upload error" });
    }
    if (!req.file) {
      req.body = req.body || "";

      return next();
    }
    req.body.picture = `/images/${req.file.originalname}`;
    next();
  });
};
