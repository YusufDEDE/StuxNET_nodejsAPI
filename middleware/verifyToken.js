const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token'] || req.body.token || req.query.token
    if (token) {
        jwt.verify(token,req.app.get('api_key'),(err,decoded)=>{
            
            if(err)
            {
                res.json({
                    status:false,
                    message:'Failed to authentication token.'
                })
            }else{
                req.decode=decoded, //payload kısmını alıyor
                next();
            }
        });

    } else {
        res.json({
            status: false,
            message: 'No token provided.'
        })
    }
};