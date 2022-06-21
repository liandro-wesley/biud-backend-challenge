import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class AuthService {
  public async generateToken(data) {
    return jwt.sign(data, process.env.SALT_KEY, {
      expiresIn: '1d'
    });
  }

  public async decodeToken(tokenData) {
    const data = await jwt.verify(tokenData, process.env.SALT_KEY);
    return data;
  }

  public async authorize(req: Request, res: Response, next: NextFunction) {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
      res.status(401).send({
        message: 'Acesso Restrito'
      });
    } else {
      await jwt.verify(token, process.env.SALT_KEY, (error, _decoded) => {
        if (error) {
          res.status(401).send({
            message: 'Token Inválido'
          });
        } else {
          next();
        }
      });
    }
  }
}

export default new AuthService();
