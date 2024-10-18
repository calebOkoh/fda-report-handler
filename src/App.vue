<template>
  <!--https://antdv.com/components/menu#components-menu-demo-horizontal-->
  <header>
    <NavigationBar />
    <nav>
      <router-link to="/">Complaint Form</router-link> |
      <router-link to="/qr">Scan a Code</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </header>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import { defineComponent } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
export default defineComponent({
  components: NavigationBar,
});
</script>

<style>
/* header {
  background-color: #0888de;
  position: fixed;
  width: 100%;
  max-height: 6%;
} */

body {
  font-weight: bold;
  color: #2c3e50;
  background-color: white;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
