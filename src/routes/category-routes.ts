import { Router } from 'express';
import {
  createNewCategory,
  updateCategory,
  removeCategory,
  getAllCategory
} from '../controllers/category-controller';
import AuthService from '../services/auth-service';
const router = Router();

router.get('/', AuthService.authorize, getAllCategory);
router.post('/', AuthService.authorize, createNewCategory);
router.put('/', AuthService.authorize, updateCategory);
router.delete('/', AuthService.authorize, removeCategory);

export default router;
