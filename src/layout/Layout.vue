<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo" v-show="!isCollapse">
        <img src="@/assets/images/logo.svg" alt="logo">
        <h1>租物之家运营中心</h1>
      </div>
      <el-menu
          class="el-menu-vertical"
          active-text-color="#2F7CE5"
          background-color="#282A36"
          text-color="#fff"
          :collapse="isCollapse"
          router
          :default-active="defaultActive"
      >
        <MenuTree :userMenu="userMenu"/>
      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">
          <div @click="handleIsCollapse">
            <el-icon v-if="isCollapse">
              <Expand/>
            </el-icon>
            <el-icon v-else>
              <Fold/>
            </el-icon>
          </div>
        </div>
        <div class="user-info">
          <!-- 下拉菜单 -->
          <el-dropdown trigger="click" @command="handleLogout">
            <div class="user-info-tools">
              <span>姓名</span>
              <el-icon>
                <Tools/>
              </el-icon>
            </div>
            <span class="el-dropdown-link"></span>
            <template #dropdown>
              <el-dropdown-menu>
                <!--<el-dropdown-item command="email">邮箱 : {{ userInfo.userEmail }}</el-dropdown-item>-->
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue"
import {useRouter} from "vue-router"
import MenuTree from "../components/MenuTree.vue"
import list from '../mock/menuList.js';

const router = useRouter()

let isCollapse: Ref<boolean> = ref(false)

// 获取当前路由
let defaultActive: Ref<string> = ref(location.hash.slice(1))

// 用户菜单
let userMenu:Ref<any> = ref(list)


// 菜单收缩
const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}

// 退出登录
const handleLogout = (key: string) => {
  router.push('/login')
}

</script>

<style scoped lang="scss">
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: v-bind("isCollapse ? '60px' : '200px'");
    height: 100vh;
    background: #282A36;
    overflow-y: auto;
    transition: width 0.3s;
    color: #fff;

    .logo {
      padding: 20px;
      text-align: center;
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
      }

      h1 {
        margin-left: 10px;
        width: 70px;
        line-height: 1.7em;
      }
    }

    .el-menu-vertical {
      border-right: 0;
    }
  }

  .content-right {
    margin-left: v-bind("isCollapse ? '60px' : '200px'");
    transition: margin-left 0.3s;

    .nav-top {
      background: #fff;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      padding: 10px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;

      .bread {
        display: flex;
        align-items: center;

        .el-icon {
          margin-right: 10px;
        }
      }

      .user-info {
        margin-top: 5px;
        display: flex;
        cursor: pointer;

        .user-info-tools {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .wrapper {
      height: calc(100vh - 50px);
      background: #ECEEF1;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}

</style>
