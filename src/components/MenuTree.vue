<template>
  <template v-for="menu in userMenu">
    <el-sub-menu
        v-if="menu.children && menu.children.length > 0 && menu.children[0].menuType.toString() === '1'"
        :key="menu.id"
        :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.icon"/>
        </el-icon>
        <span slot="title">
          {{ menu.menuName }}
        </span>
      </template>
      <MenuTree :userMenu="menu.children"/>
    </el-sub-menu>
    <el-menu-item
        class="mr-8"
        v-else-if="menu.menuType.toString() === '1'"
        :index="menu.path"
        :key="menu.id">
      <el-icon v-if="menu.icon">
        <component :is="menu.icon"/>
      </el-icon>
      <span slot="title">
          {{ menu.menuName }}
        </span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  userMenu: {
    type: Object,
    default: () => {
    },
    required: true
  },
})
</script>

<style scoped lang="scss">
.mr-8 {
  margin-right: 8px;
}
</style>
