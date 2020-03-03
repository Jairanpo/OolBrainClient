<template>
  <b-container fluid>
    <Navbar />
    <nuxt />
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
