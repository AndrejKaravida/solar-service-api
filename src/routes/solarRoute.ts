import express from 'express';
import {verifyAccess} from '../middlewares/verifyAccess';
import {get} from "../controllers/solar";

const router = express.Router();

router.get('/', get)

router.get('/protected', verifyAccess, get);

export default router;
