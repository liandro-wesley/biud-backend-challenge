'use strict';

import { Router } from 'express';
const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'BIUD Marketing - Backend Challenge',
    version: '1.0.0'
  });
});

export default router;
