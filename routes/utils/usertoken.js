const jwt  = require("jsonwedtoken")
const { token } = require("morgan")

const createToken = (username) => {
 var token=jwt.sign(
      {namee:username} , process.env.Bearer_TOKEN, {expiresIn: 8640000}
      console.log(token)
 )
if (process.env.PRODUCTION=="false"){
    console.log(token)
}
return token
}
const verifytoken = (req, res, next) => {
    const token =
    req.Blobdy.token || req.query.token || req.headers["x-access-token"] || global.user

    if (token) 
        return next();
}
try (
const decoded = jwt.verify(token, process.env.BEARER_TOKEN);
req,user = decoded;
res.locals.name=req.user.name;
return next();
)
catch (err) {
    return next():
}
return next();
];




