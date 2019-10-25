function isAuthenticated(req,res,next){
    if(req.isAuthenticated())
    next();
    else
    req.redirect('/');//değişicek
}
module.exports=isAuthenticated;