const { Router } = require('express');
const DataUser = require('../models/DataUser');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/', async (req, res) => {
  try {
    console.log('req.query.token  ', req.query.token);
    // console.log(req);
    // const { user } = req;
    // const token = req.headers.authorization.split(' ')[1];
    // if (!token) {
    //   return res.status(401).json({ message: 'Нет авторизации' });
    // }

    // const decoded = jwt.verify(token, config.get('jwtSecret'));
    // req.user = decoded;
    // console.log('req.user ', req.user);

    res.json('kek');
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userData = {};
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const listUsers = [
      { name: 'User1', city: 'Moscow' },
      { name: 'User2', city: 'Oslo' },
      { name: 'User3', city: 'Berlin' },
    ];
    res.json({ data: listUsers });
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

router.post('/edit', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = router;
