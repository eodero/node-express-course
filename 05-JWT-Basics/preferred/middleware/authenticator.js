const jwt = require('jsonwebtoken');

const authenticatorMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split('Bearer ')[1];

    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { username } = decoded;
        req.user = { username };
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = authenticatorMiddleware;
