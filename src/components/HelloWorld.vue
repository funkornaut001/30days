<!-- prettier-ignore -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Gm, I'm Trevor, aka Funkornaut, a self taught blockchain developer
      and Smart Contract auditor.
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #8d37df;
}
</style>
