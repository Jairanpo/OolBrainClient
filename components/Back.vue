<template>
  <div>
    <b-row>
      <b-col class="mt-3">
        <b-button variant="light" :href=url>
          <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Up",
  props:["url"]
};
</script>