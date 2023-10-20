<template>
  <div>
    <div>Transaction ID: {{ transactionId }}</div>
    <h1>BLOGGY</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GET_LATEST_POST } from "@/graphql/blogQueries"; // Adjust the import path

export default defineComponent({
  name: "blog-compoent",
  data() {
    return {
      transactionId: "",
    };
  },
  apollo: {
    transactionId: {
      query: GET_LATEST_POST,
      variables: {
        digest: "EwuhLuucGu8M-Q1tImQw6YAlDtzMdtBbi6639xymxik",
      },
      update: (data: any) => data.transactions.edges[0]?.node.id,
    },
  },
});
</script>
<!-- <script lang="ts">
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_LATEST_POST } from "../graphql/blogQueries";

export default {
  setup() {
    const walletAddress = ref("funkornaut.eth");
    const { result, loading, error } = useQuery(GET_LATEST_POST, {
      wallet: walletAddress,
    });

    return {
      result,
      loading,
      error,
    };
  },
};
</script> -->
