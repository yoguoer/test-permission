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
              v-model="formdata.userPhone"
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
        <el-button @click="goPage('goodWorld')"> good </el-button>
        <el-button @click="goPage('badWorld')"> bad </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import loginimg from "@/assets/images/loginimg.png";
import { reactive } from "vue"
import { useRouter } from 'vue-router'; 

const formdata = reactive({
    userName: "",
    passWord: "",
  })

const router = useRouter();  

const goPage = function(path:string){
  if(path=='goodWorld'){
    router.push('/goodWorld')
  }else{
    router.push('/badWorld')
  }
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
