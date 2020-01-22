import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const student = await Student.findOne({ where: { email } });

    if (!student) {
      return res.status(400).json({ error: 'Student not exists.' });
    }

    const { id, name, age, weight, height } = await student.update(req.body);

    return res.json({
      id,
      email,
      name,
      age,
      weight,
      height,
      admId: req.admId,
    });
  }

  async get(req, res) {
    const { name } = req.body;
    const student = await Student.findOne({ where: { name } });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists bro' });
    }

    const { id, email, age, weight, height } = await student.get(req.body);

    return res.json({
      id,
      email,
      name,
      age,
      weight,
      height,
      admId: req.admId,
    });
  }
}

export default new StudentController();
