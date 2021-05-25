<<<<<<< HEAD
const {userCont} = require('../controllers');
const {signupHelpers} = require('../middlewares')
module.exports = function(app){
    app.use(function(res,req,next){
        res.header(
            "Access-Control-Allow-Headers",
        );
        next();
    })
    
    app.post('/api/user/signup',[signupHelpers.checkDuplicateEmail],[userCont.signUp]);
    app.post('/api/user/login',[userCont.signIn]);
    
=======
const {userCont} = require('../controllers');
const {signupHelpers} = require('../middlewares')
module.exports = function(app){
    app.use(function(res,req,next){
        res.header(
            "Access-Control-Allow-Headers",
        );
        next();
    })
    
    app.post('/api/user/signup',[signupHelpers.checkDuplicateEmail],[userCont.signUp]);
    app.post('/api/user/login',[userCont.signIn]);
    
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
}