var db = require("./connection");


class candidate{
    
    static signUp(req)
    {
        var status = 'PENDING';
        let sql = `INSERT INTO CANDIDATE(EMAIL, TELEPHONENUMBER, PASSWORD, CV ,STATUS) VALUES ('${req.body.email}', '${req.body.number}', '${req.body.pass}', '${req.body.CV}', '${status}');`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
        });
    }

}
module.exports = candidate