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
    // console.log(req.studentId);
    const student = await Student.findByPk(req.studentId);

    const { email } = req.body;
    const { id, name, provider } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new StudentController();
