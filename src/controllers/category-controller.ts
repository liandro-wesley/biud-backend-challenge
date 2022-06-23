import { Request, Response } from 'express';
import {
  create,
  update,
  remove,
  getAll
} from '../repositories/category-repository';

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const data = await getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const createNewCategory = async (req: Request, res: Response) => {
  try {
    await create({
      user: req.body.user,
      title: req.body.title
    });
    res.status(201).send({
      message: 'Categoria cadastrada com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    await update(req.body.id, {
      user: req.body.user,
      title: req.body.title
    });
    res.status(200).send({
      message: 'Categoria editada com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    await remove(req.body.id);
    res.status(200).send({
      message: 'Categoria removida com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};
