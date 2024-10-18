<template>
  <!--https://antdv.com/components/menu#components-menu-demo-horizontal-->
  <!-- <nav>
      <router-link to="/">Complaint Form</router-link> |
      <router-link to="/qr">Scan a Code</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
export default defineComponent({
  components: NavigationBar,
});
</script>

<style>
body {
  font-weight: bold;
  color: #2c3e50;
  background-color: white;
  margin: auto;
  padding: 20px;
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
