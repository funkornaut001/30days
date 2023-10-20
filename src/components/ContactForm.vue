<!-- src/components/ContactForm.vue -->

<template>
  <div class="contact-form">
    <h3 class="text-[rgb(175,34,207)]">Contact Me</h3>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="form-group">
        <input
          type="text"
          id="subject"
          v-model="subject"
          required
          class="w-1/5 p-2 rounded border border-gray-300"
          placeholder="Subject"
        />
      </div>
      <div class="form-group">
        <textarea
          id="message"
          v-model="message"
          required
          class="w-1/5 p-2 rounded border border-gray-300"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-slate-699 hover:bg-blue-800 text-[rgb(175,34,207)] font-semibold py-2 px-6 rounded-full border border-neutral-500"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactForm",
  data() {
    return {
      subject: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.subject && this.message) {
        console.log("Form submitted:", {
          subject: this.subject,
          message: this.message,
        });
        this.subject = "";
        this.message = "";
      } else {
        console.error("Form validation failed");
      }
    },
  },
});
</script>

<style scoped>
/* ...your styles... */
</style>
