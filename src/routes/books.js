import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
    id: 1,
    name: 'Default book'
}]));

export default router;