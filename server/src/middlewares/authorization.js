const jwt = require('jsonwebtoken');
const key="eoifkjefeu6193611986"

const authorization = (req, res, next) => {
  const token = req.header('Auth-Token');
  if (!token) return res.status(401).send({ message: 'Access denied.' });

  try {
    const verified = jwt.verify(token, key);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};

module.exports = authorization;
