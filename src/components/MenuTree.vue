<template>
  <el-menu-item index="/welcome">
    <el-icon>
      <Menu/>
    </el-icon>
    <template #title>欢迎</template>
  </el-menu-item>
  <el-sub-menu index="one">
    <template #title>
      <el-icon>
        <location/>
      </el-icon>
      <span slot="title">一级菜单</span>
    </template>
    <el-menu-item class="mr-8" index="/home">首页</el-menu-item>
    <el-menu-item class="mr-8" index="/test">测试</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="/about">
    <el-icon>
      <template #default>
        <component is="Compass" />
      </template>
    </el-icon>
    <template #title>关于</template>
  </el-menu-item>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.mr-8 {
  margin-right: 8px;
}
</style>
