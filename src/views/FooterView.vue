<template>
  <footer>
    <ContactForm />
    <Footer />
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "@/components/ContactForm.vue"; // Adjust the import path if necessary
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "FooterView",
  components: {
    ContactForm,
    Footer,
  },
});
</script>

<style scoped>
/* ...your styles... */
</style>
