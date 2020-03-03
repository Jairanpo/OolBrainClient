<template>
  <div>
    <b-card
      :title=title
      :img-src=image
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text class="text-justify">{{description}}</b-card-text>
      <b-col class="text-center">
        <b-button v-if=status variant="outline-dark" :href=link>more +</b-button>
      </b-col>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Infocard",
  props:["title", "image", "description", "status", "link"]
}
</script>