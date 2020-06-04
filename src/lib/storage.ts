const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: (arg0: null, arg1: string) => void) {
        cb(null, '/storage/img');
    },
    filename: function (req: any, file: { fieldname: string; }, cb: (arg0: null, arg1: string) => void) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});

const upload = multer({ storage });

module.exports = upload;
