<template>
  <div id="app">
    <div class="link">
      <router-link to="/">Form</router-link>
      <router-link to="/addRule">AddRule</router-link>
      <router-link to="/handle">handle validator</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.link {
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
  padding: 20px 0;
  a {
    padding: 4px 8px;
  }
  a:active {
    color: #000;
  }
}
.router-link-exact-active {
  background-color: rgb(30, 31, 136);
  color: #fff;
}
</style>
