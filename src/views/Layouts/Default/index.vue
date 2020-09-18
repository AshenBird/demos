<template>
  <div class="default-layout">
    <div class="left-part">
      <Sidebar></Sidebar>
    </div>
    <div class="right-part">
      <Header></Header>
      <main></main>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default {
  components: {
    Header,
    Sidebar
  }
};
</script>
<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  & > * {
    height: 100%;
  }
}
</style>
