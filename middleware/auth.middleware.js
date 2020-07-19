const jwt = require('jsonwebtoken');
const config = require('config');

module.export = (req, res, next) => {
  console.log('kek');
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded;
    console.log('req.user ', req.user);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Нет авторизации' });
  }
};
