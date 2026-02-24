const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const token = req.header('Authorization');

    
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso denegado' });
    }

    try {
        
        
        const tokenLimpio = token.replace('Bearer ', '');
        
        const decoded = jwt.verify(tokenLimpio, process.env.JWT_SECRET);
        
        
        req.user = decoded.user;
        next(); 

    } catch (err) {
        res.status(401).json({ msg: 'Token no es válido' });
    }
};