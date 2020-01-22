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
    const { email } = req.body;
    // const student = await Student.findByPk(req.studentId);
    // const student = await Student.findByPk(req.studentId);

    // console.log(student);

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
}

export default new StudentController();
