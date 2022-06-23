import { ArticleInterface } from '../interfaces/article-interface';
import { Article } from '../models/article-model';

export const getAll = async () => {
  const res = await Article.find({}, 'author title slug description category');
  return res;
};

export const getBySlug = async (slug) => {
  const res = await Article.findOne(
    {
      slug
    },
    'author title slug description category'
  );
  return res;
};

export const create = async (data: ArticleInterface) => {
  const article = new Article(data);
  article.save();
};

export const uptate = async (id, data: ArticleInterface) => {
  await Article.findByIdAndUpdate(id, {
    $set: {
      author: data.author,
      title: data.title,
      description: data.description,
      category: data.category,
      slug: data.slug
    }
  });
};

export const remove = async (id) => {
  await Article.findOneAndRemove(id);
};
