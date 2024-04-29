
import { basicRoutes } from "@/router/basicRoutes"
import { asyncRoutes } from "@/router/asyncRoutes"
import { whiteList } from "@/router/whiteList"
import router from '@/router'; 
import { getAuthList, checkOaLogin } from "@/api/login"
import { ElMessage } from 'element-plus'

const domain = '.tcl.com'
const publicPath = './'
//定义一个符合 permissionOptions 接口的对象 
export const options = {
  publicPath, // 历史记录路径
  router,  // 路由对象（可选）
  whiteList, // 白名单
  asyncRoutes, // 异步路由
  basicRoutes, // 基础路由
  getAuthList, // 获取用户权限列表
  checkOaLogin, // 检查oa登录状态
  domain, // oa 域名
  Message:ElMessage // 消息提示
}

