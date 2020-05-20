const User = require("../model/user");
const bcrypt = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken');
const {SECRET} = require('../config')


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
     await User.create({ username, password:hash, email });
     return { msg: "注册成功" }
  }

  // 登录校验
  static async verify(params) {
    const { password, email } = params;
    // 查询用户是否存在
    const userInfo = await User.findOne({
      where: {
        email,
      }
    });

    if (!userInfo) {
      return { msg: "该邮箱未注册账号" };
    }

    // 验证密码是否正确
    const correct = bcrypt.compareSync(password, userInfo.password);

    if (!correct) {
      return { msg: "账号或密码不正确" };
    }
    
    const token = jsonwebtoken.sign(
      { name: userInfo.username, id: userInfo.id },  // 加密userToken
      SECRET,
      { expiresIn: '12h' }
  )
    return {msg:'登录成功',token};
  }
}

module.exports = UserSrv;
