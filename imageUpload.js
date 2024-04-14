const multer = require('multer');

// Configure multer to store uploaded images in a specific directory
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where images will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set a unique filename for the uploaded image
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
