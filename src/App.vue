<template>
  <header>
    <nav>
      <router-link to="/">Complaint Form</router-link> |
      <router-link to="/qr">Scan a Code</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </header>
</template>

<style>
header {
  background-color: #0888de; /* Color for the header */
  position: fixed;
  width: 100%;
  max-height: 10%;
}

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
