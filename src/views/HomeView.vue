<template>
  <div class="home">
    <img alt="Funkornaut" src="../assets/cone_gnar.jpg" />
    <HelloWorld msg="Hello I'm Trevor" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
