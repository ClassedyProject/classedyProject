import express from 'express';
import { postAccount } from '../Controllers/Controller.js';
import { getAccount } from '../Controllers/Controller.js';
const router = express.Router();
router.post('/', postAccount)
router.get('/', getAccount)

export default router