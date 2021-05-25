<<<<<<< HEAD
const {signupHelpers} = require('../middlewares')
const {walletCont} = require('../controllers')
module.exports = function(app){
    app.use(function(res,req,next){
        res.header(
            "Access-Control-Allow-Headers",
        );
        next();
    })
    
    app.post('/api/wallet/create',[walletCont.createWallet]);
    app.post('/api/wallet/get',[walletCont.getWallet])
    
=======
const {signupHelpers} = require('../middlewares')
const {walletCont} = require('../controllers')
module.exports = function(app){
    app.use(function(res,req,next){
        res.header(
            "Access-Control-Allow-Headers",
        );
        next();
    })
    
    app.post('/api/wallet/create',[walletCont.createWallet]);
    app.post('/api/wallet/get',[walletCont.getWallet])
    
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
}