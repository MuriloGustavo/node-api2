import express from 'express';
import booksRoute from './books';

const router = express.Router();

router.use('/books', booksRoute);
router.get('/', (req, res) => res.send('API is working correctly'));

export default router;