import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Admuser extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    // const password_hash = bcrypt.hashSync('123456', 8),
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  checkPass(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Admuser;
