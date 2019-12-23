const express = require('express')
const multer = require('multer');
const path = require('path')

const CandidateController = require('../controllers/CandidateControllers.js');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, './upload_files')
        

    },
    filename: function (req, file, cb) {
        let trimmedTitle = req.body.title.replace(/\s/g, "-");
        cb(null,  trimmedTitle + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


router.post("/signup", upload.single("CV"), CandidateController.signUp);
//router.post("/login", CandidateController.login);


module.exports = router;