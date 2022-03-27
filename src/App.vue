<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
section {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
}
</style>
