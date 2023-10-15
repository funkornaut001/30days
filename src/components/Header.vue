<!-- src/components/Header.vue -->

<template>
  <header>
    <div class="header-left">
      <img src="/assets/cone_gnar.jpg" alt="Funkornaut Photo" />
      <h1>Funkornaut</h1>
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/bookmarks">Bookmarks</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header-Component",
});
</script>
