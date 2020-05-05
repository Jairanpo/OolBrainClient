<template>
  <div>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      id="card"
    >
      <b-card-text class="text-justify">{{ description }}</b-card-text>
      <b-col class="text-center">
        <b-button
          v-if="status"
          class="more-button"
          variant="outline-dark"
          :href="link"
          >more +</b-button
        >
        <b-button
          v-else
          class="inprogress-button"
          variant="outline-dark"
          :href="link"
          disabled
          >in progress...</b-button
        >
      </b-col>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'Infocard',
    props: ['title', 'image', 'description', 'status', 'link'],
  };
</script>
<style scoped>
  #card {
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
  }
  .more-button {
    box-shadow: 0px 3px 7px 3px rgba(0, 0, 0, 0.3);
    background-color: #333;
    color: #fff;
  }
</style>
