<template>
  <div class="login">

    <div class="header">
      <img src="@/assets/images/logo.svg" alt="logo">
      <h1>租物之家运营中心</h1>
    </div>
    <div class="content">
      <el-form
          ref="userFormRef"
          :model="userForm"
          :rules="rules"
          class="userForm"
      >
        <el-form-item prop="account">
          <el-input
              v-model="userForm.account"
              type="text"
              clearable
              placeholder="账号 : "
              autocomplete="off">
            <template #prefix>
              <el-icon>
                <User/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="userForm.password"
              type="password"
              clearable
              show-password
              placeholder="密码 : "
              autocomplete="off">
            <template #prefix>
              <el-icon>
                <Lock/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="autoLogin" class="auxiliary-box">
          <el-checkbox v-model="userForm.autoLogin" label="自动登录" size="large"/>
          <span>忘记密码?</span>
        </el-form-item>

        <el-form-item>
          <el-button class="submit-btn" type="primary" @click="submitForm(userFormRef)">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
import type {FormInstance} from 'element-plus'
import {useRouter} from "vue-router";

const userFormRef = ref<FormInstance>()
const router = useRouter()

interface IUserForm {
  account: string,
  password: string,
  autoLogin: boolean
}

const userForm: Ref<IUserForm> = ref({
  account: '',
  password: '',
  autoLogin: false,
})

const rules = ref({
  account: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 2, max: 16, message: '用户名长度为2-16个字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 32, message: '密码长度应在6位数以上', trigger: 'blur'}
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('账号 : ', userForm.value.account)
      console.log('密码 : ', userForm.value.password)
      console.log('自动登录 : ', userForm.value.autoLogin)

      // 完成提交, 清空表单
      formEl.resetFields()
      router.push("/welcome")
    }
  })
}


</script>

<style scoped lang="scss">
.login {
  background: url("@/assets/images/login/bg.svg") center 110px / 100% no-repeat #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;

  .header {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      margin-left: 10px;
      font-weight: bold;
      font-size: 30px;
    }
  }

  .content {
    width: 300px;
    margin-top: 40px;

    .auxiliary-box {
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: space-between !important;
        align-items: center;

        & > span {
          color: #5A9CF8;
        }

        .el-checkbox.el-checkbox--large .el-checkbox__label {
          color: #333;
          font-weight: 400 !important;
        }
      }
    }

    .submit-btn {
      width: 100%;
    }
  }
}

</style>
