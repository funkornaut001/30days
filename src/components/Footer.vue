<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="bg-gray-800">
    <div
      class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span class="text-gray-400 text-sm text-center sm:text-left">© 2021 Funkornaut</span>
            <div class="ml-auto">
                <a href="https://github.com/funkornaut001" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300 mr-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M0 0v24h24V0H0zm14.75 19.5c-.25.25-.5.25-.75 0-.25-.25-.25-.5 0-.75.25-.25.5-.25.75 0 .25.25.25.5 0 .75zm-3.5 0c-.25.25-.5.25-.75 0-.25-.25-.25-.5 0-.75.25-.25.5-.25.75 0 .25.25.25.5 0 .75zm-3.5 0c-.25.25-.5.25-.75 0-.25-.25-.25-.5 0-.75.25-.25.5-.25.75 0 .25.25.25.5 0 .75zm-3.5 0c-.25.25-.5.25-.75 0-.25-.25-.25-.5 0-.75.25-.25.5-.25.75 0 .25.25.25.5 0 .75zm-3.5 0c-.25.25-.5.25-.75 0-.25-.25-.25-.5 0-.75.25-.25.5-.25.75 0 .25.25.25.5 0 .75zm12.25-3.5c0 .69-.56 1.25-1.25 1.25H4.25c-.69 0-1.25-.56-1.25-1.25v-11c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25v11zm-1.25-11H4.25v11h18.5v-11z"/>
                    </svg>
                </a>
                <a href="https://twitter.com/funkornaut" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300 mr-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23.998 4.586c-.885.389-1.83.654-2.824.773a4.677 4.677 0 0 0 2.048-2.58 9.32 9.32 0 0 1-2.957 1.13 4.66 4.66 0 0 0-7.965 4.25 13.218 13.218 0 0 1-9.58-4.86 4.66 4.66 0 0 0 1.44 6.224 4.65 4.65 0 0 1-2.11-.58v.06a4.66 4.66 0 0 0 3.728 4.568 4.72 4.72 0 0 1-1.232.16c-.3 0-.59-.03-.878-.09a4.66 4.66 0 0 0 4.352 3.23A9.362 9.362 0 0 1 1.11 18.3a13.18 13.18 0 0 0 7.145 2.09c8.606 0 13.31-7.13 13.31-13.31 0-.202-.005-.405-.014-.607a9.504 9.504 0 0 0 2.337-2.43l.002-.003z"/>
                    </svg>
                </a>
                <a href="https://mirror.xyz/funkornaut.eth" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-11v5h2v-5h-2z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer-Component",
});
</script>
