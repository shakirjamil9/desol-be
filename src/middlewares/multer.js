const multer = require('multer');
const path = require('path');

const MAX_FILE_SIZE = 4 * 1024 * 1024

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/')); 
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now(); 
    const fileExtension = path.extname(file.originalname); 
    const filename = `${timestamp}${fileExtension}`; 
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
    cb(null, true); // allow all kinds of files

};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: MAX_FILE_SIZE }
});

module.exports = upload;
