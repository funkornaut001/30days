<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="bg-gray-800">
    <ContactForm />
    <div
      class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span class="text-gray-400 text-sm text-center sm:text-left">© 2023 Funkornaut</span>
            <div class="ml-auto">
                <a href="https://github.com/funkornaut001" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300 mr-4">
                    <i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://twitter.com/funkornaut" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300 mr-4">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>

                <a href="https://mirror.xyz/funkornaut.eth" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300">
                    <i class="fa-solid fa-book-open-reader fa-2x"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "@/components/ContactForm.vue"; // Adjust the import path if necessary

export default defineComponent({
  name: "Footer-Component",
  components: {
    ContactForm,
  },
});
</script>
