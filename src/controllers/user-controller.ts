import { Request, Response } from 'express';
import { create, getById, authenticate } from '../repositories/user-repository';
import DelegateEncryptData from '../helpers/delegate-encrypt-data';
import AuthService from '../services/auth-service';

export const signup = async (req: Request, res: Response) => {
  try {
    await create({
      email: req.body.email,
      password: `${DelegateEncryptData.encrypt(req.body.password)}`,
      lastName: req.body.lastName,
      firstName: req.body.firstName
    });

    res.status(201).send({
      message: 'Cliente cadastrado com sucesso!'
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha na request!'
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await authenticate({
      email: req.body.email,
      password: `${DelegateEncryptData.encrypt(req.body.password)}`
    });

    if (!user) {
      res.status(404).send({
        message: 'Usuário ou senha inválidos'
      });
      return;
    }

    const token = await AuthService.generateToken({
      id: user._id,
      email: user.email,
      name: user.fullName()
    });

    res.status(200).send({
      token
    });
  } catch (err) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

export const reSignin = async (req: Request, res: Response) => {
  try {
    const validToken =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const data = await AuthService.decodeToken(validToken);
    const user = await getById(data);

    if (!user) {
      res.status(404).send({
        message: 'Usuário não encontrado'
      });
      return;
    }

    const token = await AuthService.generateToken({
      id: user._id,
      email: user.email,
      name: user.fullName()
    });

    res.status(201).send({
      token
    });
  } catch (err) {
    global.log(err);
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};
