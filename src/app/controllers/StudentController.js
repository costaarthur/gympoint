import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    // const { id, name, email, provider } = await User.create(req.body);
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
    return res.json({ ok: true });
  }
}

export default new StudentController();
