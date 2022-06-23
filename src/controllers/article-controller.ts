import { Request, Response } from 'express';
import {
  create,
  getAll,
  getBySlug,
  remove,
  uptate
} from '../repositories/article-repository';

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const data = await getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const getArticleDetails = async (req: Request, res: Response) => {
  try {
    const data = await getBySlug(req.params.slug);
    if (!data) {
      res
        .status(404)
        .send({
          message: 'Artigo não encontrado!'
        })
        .end();
      return;
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const createNewArticle = async (req: Request, res: Response) => {
  try {
    await create({
      author: req.body.author,
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      category: req.body.category
    });
    res.status(201).send({
      message: 'Artigo publicado com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    await uptate(req.params.id, {
      author: req.body.author,
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      category: req.body.category
    });
    res.status(200).send({
      message: 'Artigo atualizado com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const removeArticle = async (req: Request, res: Response) => {
  try {
    await remove(req.params.id);
    res.status(200).send({
      message: 'Artigo removido com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};
