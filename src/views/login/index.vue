<template>
  <div class="login">
    <div class="login-header">
      <div>test</div>
    </div>
    <div class="login-main">
      <div class="login-fl"><img :src="loginimg" alt="" /></div>

      <div class="login-fr">
        <el-form ref="ruleForm" :model="formdata" :rules="rules">
          <el-form-item prop="userPhone">
            <el-input
              placeholder="账号"
              id="userPhone"
              v-model="formdata.userName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              placeholder="密码"
              type="passWord"
              v-model="formdata.passWord"
              show-password
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="submit(formdata)"> 登录 </el-button>
        <el-button @click="goPage('goodWorld')"> good </el-button>
        <el-button @click="goPage('badWorld')"> bad </el-button>

        <el-button v-permission="{ module: 'admin', auth: 'add' }">
          有权限
        </el-button>
        <el-button v-if="hasPermissions({ module: 'admin', auth: 'update' })">
          没权限
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import loginimg from "@/assets/images/loginimg.png";
import { reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Storage from "@/utils/storage";

const formdata = reactive({
  userName: "",
  passWord: "",
});

const router = useRouter();

const goPage = function (path: string) {
  if (path == "goodWorld") {
    router.push("/goodWorld");
  } else {
    router.push("/badWorld");
  }
};

let resOa = ref(null);
let resToken = ref(null);

const submit = function (formdata) {
  // 修改函数定义，去掉赋值操作符，并修正参数名
  axios({
    url: "https://rd-mokadisplay.tcl.com/srdpm-api/api/login",
    method: "post",
    headers: {
      "Content-Type": "application/json", // 正确设置 Content-Type
    },
    data: {
      username: formdata.userName, // 使用传入的参数formdata，而不是formData（注意大小写）
      password: formdata.passWord, // 确保属性名与你的formdata对象中的属性名匹配
    },
  })
    .then(function (response) {
      // 直接处理响应数据
      const {
        token = null, // 假设这是响应体中的 token
        oa = { ticketName: null, ticketValue: null }, // 假设这是响应体中的 oa 对象
      } = response.data.data;
      console.log("🚀 ~ response ~", response.data.data, token, oa);
      resToken.value = token || "";
      console.log("🚀 ~ submit ~ resToken.value:", resToken.value);
      resOa.value = oa;
      console.log("🚀 ~ submit ~ resOa.value:", resOa.value);
      Storage.setCookies("LtpaToken", resToken.value);
      if (resOa.value.ticketName) {
        // 使用 resOa.value 来访问响应式引用中的值
        Storage.setCookies(resOa.value.ticketName, resOa.value.ticketValue);
      }
    })
    .catch(function (error) {
      // 添加错误处理
      console.error(error);
    });
};

// 注入权限判断方法 hasPermissions
const hasPermissions = inject("hasPermissions");
if (hasPermissions({ module: "admin", auth: "add" })) {
  console.log("用户有权限");
} else {
  console.log("用户没有权限");
}

</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 22px;
}

.login {
  background-color: #f9f9f9;
  height: 100%;
}

.login-header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: left;
  z-index: 10;
  font-family: "微软雅黑";
  box-shadow: 0 3px 4px #f9f9f9;
  background-color: #fff;
}

.login-main {
  height: 450px;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 70px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  display: flex;

  .login-fl {
    width: 430px;
    overflow: hidden;

    img {
      height: 100%;
      margin-left: -205px;
    }
  }

  .login-fr {
    padding-top: 30px;
    width: 578px;
    text-align: center;

    .el-form {
      padding: 0 143px;
    }

    .el-button {
      background-color: #198cff;
      color: #fff;
      width: 294px;
      border-radius: 30px;
    }
  }
}
</style>

function axios(arg0: { url: string; method: string; contentType: string; data: {
username: any; password: any; }; }) { throw new Error("Function not
implemented."); } function axios(arg0: { url: string; method: string;
contentType: string; data: { username: any; password: any; }; }) { throw new
Error("Function not implemented."); }
