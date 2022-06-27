import { userSigninValidateRequestMiddleware } from './../middlewares/user-signin-middleware';
import { userSignupValidateRequestMiddleware } from './../middlewares/user-create-middleware';
import { Router } from 'express';
import {
  signup,
  signin,
  reSignin,
  decode
} from '../controllers/user-controller';
import AuthService from '../services/auth-service';

const router = Router();

router.post(
  '/authenticate/signup',
  userSignupValidateRequestMiddleware,
  signup
);
router.post(
  '/authenticate/signin',
  userSigninValidateRequestMiddleware,
  signin
);
router.post('/authenticate/re-signin', AuthService.authorize, reSignin);
router.post('/authenticate/decode', decode);

export default router;
