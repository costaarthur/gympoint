import jwt from 'jsonwebtoken';

import Admuser from '../models/AdmUser';

class AdmController {
  async store(req, res) {
    const { email, password } = req.body;

    const admuser = await Admuser.findOne({ where: { email } });
    if (!admuser) {
      return res.status(401).json({ error: 'User not found' });
    }

    const { name } = admuser;

    return res.json({
      admuser: {
        name,
        email,
      },
    });
  }
}

export default new AdmController();
