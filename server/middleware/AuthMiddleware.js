const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        // console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1] // Bearer theTokenItself
        if(!token){
            return res.status(401).json({message: 'Пользователь не авторизован'})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        console.log('req.user', req.user)
        next()
    } catch (e) {
        return res.status(401).json({message: 'Пользователь не авторизован'})
    }
}

