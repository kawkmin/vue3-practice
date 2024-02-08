<template>
  <div class="page">
    <BasicLayout> </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@components/atoms/layout/BasicLayout.vue";
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: $color-black-900;
}
</style>
