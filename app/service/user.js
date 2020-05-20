const User = require("../model/user");
const bcrypt = require("bcrypt");
class UserSrv {
  // 注册
  static async register(params) {
    const { username, password, email } = params;
    // 验证是否已存在
    const userInfo = await User.findOne({
      where: {
        email,
      },
    });
    if (userInfo) {
      return { msg: "该邮箱已被注册" };
    }
    const hash = bcrypt.hashSync(password, 2);
    return await User.create({ username, password:hash, email });
  }

  // 校验用户
  static async verify(params) {
    const { password, email } = params;
    // 查询用户是否存在
    const userInfo = await User.findOne({
      where: {
        email,
      },
    });

    if (!userInfo) {
      return { msg: "该邮箱未注册账号" };
    }

    // 验证密码是否正确
    const correct = bcrypt.compareSync(password, userInfo.password);

    if (!correct) {
      return { msg: "账号或密码不正确" };
    }

    return userInfo;
  }
}

module.exports = UserSrv;
