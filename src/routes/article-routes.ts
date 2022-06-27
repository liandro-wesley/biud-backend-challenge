import { Router } from 'express';
import {
  createNewArticle,
  getAllArticles,
  getArticleDetails,
  getArticlesByAuthor,
  removeArticle,
  updateArticle
} from '../controllers/article-controller';
import AuthService from '../services/auth-service';
const router = Router();

router.get('/', getAllArticles);
router.get('/details/:slug', getArticleDetails);
router.get('/my-posts/:authorId', AuthService.authorize, getArticlesByAuthor);
router.post('/', AuthService.authorize, createNewArticle);
router.put('/:id', AuthService.authorize, updateArticle);
router.delete('/:id', AuthService.authorize, removeArticle);

export default router;
