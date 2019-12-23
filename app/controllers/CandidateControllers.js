const Candidate = require("../models/Candidate");

exports.signUp = (req, res) => {
    let newCV = req.body.CV;
    newCV.path = req.file?req.file.filename: "";
    Candidate.signUp(req)
    
};

