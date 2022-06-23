import { Router } from 'express';
import {
  createNewArticle,
  getAllArticles,
  getArticleDetails,
  removeArticle,
  updateArticle
} from '../controllers/article-controller';
import AuthService from '../services/auth-service';
const router = Router();

router.get('/', AuthService.authorize, getAllArticles);
router.get('/details/:slug', AuthService.authorize, getArticleDetails);
router.post('/', AuthService.authorize, createNewArticle);
router.put('/:id', AuthService.authorize, updateArticle);
router.delete('/:id', AuthService.authorize, removeArticle);

export default router;
