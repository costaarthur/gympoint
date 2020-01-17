// import jwt from 'jsonwebtoken';

import AdmUser from '../models/AdmUser';

class AdmController {
  async store(req, res) {
    const { email, password } = req.body;

    /* const admuser = await AdmUser.findOne({ where: { email } });
    if (!admuser) {
      return res.status(401).json({ error: 'User not found' });
    } */
    const admuser = await AdmUser.findOne({ where: { email } });
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

/* import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import AdmUser from '../models/AdmUser';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const admuser = await AdmUser.findOne({ where: { email } });
    if (!admuser) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await admuser.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = admuser;

    return res.json({
      admuser: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
*/
