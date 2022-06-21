import { NextFunction, Request, Response } from 'express';
import delegateFormatError from '../helpers/delegate-format-error';
import Contract from '../validators';

export const userSigninValidateRequestMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Contract.isRequired(req.body.email, 'email', 'E-mail é obrigatório').isEmail(
    req.body.email,
    'email',
    'E-mail inválido'
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
        password: delegateFormatError('password')
      })
      .end();
    Contract.clearErrors();
    return;
  } else {
    next();
  }
};
