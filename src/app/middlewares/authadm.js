import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authadm from '../../config/authadm';

export default async (req, res, next) => {
  const admHeader = req.headers.authorization;
  if (!admHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = admHeader.split(' ');

  try {
    const decoded2 = await promisify(jwt.verify)(token, authadm.secret);

    req.studentId = decoded2.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
