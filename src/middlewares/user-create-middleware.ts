import { NextFunction, Request, Response } from 'express';
import delegateFormatError from '../helpers/delegate-format-error';
import { getByEmail } from '../repositories/user-repository';

import Contract from '../validators';

export const userSignupValidateRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Contract.isRequired(req.body.firstName, 'firstName', 'O nome é obrigatório');
  Contract.isRequired(req.body.email, 'email', 'E-mail é obrigatório').isEmail(
    req.body.email,
    'email',
    'E-mail inválido'
  );
  Contract.isRequired(
    req.body.lastName,
    'lastName',
    'O último nome é obrigatório'
  );
  Contract.isRequired(
    req.body.password,
    'password',
    'A senha é obrigatória'
  ).min(
    req.body.password,
    'password',
    6,
    'A senha deve conter pelo menos 6 caracteres'
  );

  if (!Contract.isValid) {
    res
      .status(400)
      .send({
        email: delegateFormatError('email'),
        password: delegateFormatError('password'),
        firstName: delegateFormatError('firstName'),
        lastName: delegateFormatError('lastName')
      })
      .end();
    Contract.clearErrors();
    return;
  } else {
    const hasUser = await getByEmail(req.body.email);

    if (hasUser) {
      res
        .status(400)
        .send({
          message: 'Usuário já cadastrado!'
        })
        .end();
      return;
    }

    next();
  }
};
