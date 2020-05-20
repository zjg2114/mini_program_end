const User = require('../model/user')

class UserSrv {
  // 注册
  static async register(params) {
    const {username, password ,email} = params
    // 验证是否已存在
    return await User.create({ username, password, email })
  }
}

module.exports = UserSrv