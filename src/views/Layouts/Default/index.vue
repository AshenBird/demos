<template>
  <div>
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
