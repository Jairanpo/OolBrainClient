<template>
  <div>
    <b-row>
      <b-col cols="6">
        <h1 class="mt-3">{{title}}</h1>
        <div class="text-justify" v-html="description"></div>
        <hr />
        <h3>Structure</h3>
        <div class="text-justify" v-html="structure"></div>
      </b-col>
      <b-col cols="6" class="mt-3">
        <b-img class="border border-dark mt-5" :src="image" fluid thumbnail></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Department",
  props: ["title", "image", "description", "structure"]
};
</script>