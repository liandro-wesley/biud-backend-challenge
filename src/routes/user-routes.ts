import { validateBodyParams } from './../middlewares/user-create-middleware';
import { Router } from 'express';
import { signup, signin, reSignin } from '../controllers/user-controller';
import AuthService from '../services/auth-service';

const router = Router();

router.post('/authenticate/signup', validateBodyParams, signup);
router.post('/authenticate/signin', signin);
router.post('/authenticate/re-signin', AuthService.authorize, reSignin);

export default router;
