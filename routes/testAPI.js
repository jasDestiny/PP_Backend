var express=require("express")
var router=express.Router();

var userData={"john":["pass", "jasboson@gmail.com", "8300439150"]};

router.get("/login/", function(req, res, next){
    var loginID=req.query;
    console.log(loginID);
    console.log(loginID.user);
    console.log(loginID.pass);

    var user=loginID.user;
    var pass=loginID.pass;
    if(userData[user]!==undefined){
        if(userData[user][0]==pass)
            res.send("Valid user");
        else
            res.send("Invalid password");
    }
    else
        res.send("Invalid username");
});

router.get("/signup/", function(req, res, next){
    var signUp=req.query;
    console.log(signUp);
    console.log(signUp.user);
    console.log(signUp.pass);
    console.log(signUp.email);
    console.log(signUp.pno);

    var user=signUp.user.toString();
    var pass=signUp.pass.toString();
    var email=signUp.email.toString();
    var pno=signUp.pno.toString();

    if(userData[user]!==undefined)
        res.send("Username already exists");
    else
        userData[user]=[pass, email, pno];
        console.log(userData);
        res.send("Account created successfully");
});

router.get("/usertasks/", function(res, res, next){

});

module.exports=router;