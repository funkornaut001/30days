<!-- src/components/Header.vue -->

<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <img
          src="../assets/cone_gnar.jpg"
          alt="Funkornaut Photo"
          class="header-logo"
        />
        <h1>Funkornaut</h1>
      </div>
      <nav class="header-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
          <li class="nav-item">
            <a href="/bookmarks" class="nav-link">Bookmarks</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header-Component",
});
</script>

<style scoped>
.header {
  background-color: #382e3c;
  color: rgb(175, 34, 207);
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
}

.header-logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-nav .nav-list {
  display: flex;
  align-items: left;
  padding: 0;
  margin: 0;
}

.header-nav .nav-item {
  margin-left: 20px;
}

.header-nav .nav-link {
  transition: color 0.3s;
}

.header-nav .nav-link:hover {
  color: rgb(175, 34, 207);
}
.header-nav .nav-link {
  text-decoration: none;
  transition: color 0.3s;
}

.header-nav .nav-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}
</style>
