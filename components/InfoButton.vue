<template>
  <div>
    <b-button variant="light" @click="unfold_toggle">
      Info
      <font-awesome-icon v-if="status" :icon="['fas', 'angle-up']" />
      <font-awesome-icon v-else :icon="['fas', 'angle-down']" />
    </b-button>
  </div>
</template>

<script>
export default {
  name: "InfoButton",
  props: ["unfold"],
  data: function data() {
    return {
      status: false
    };
  },
  methods: {
    unfold_toggle: function toggle() {
      if (this.status) {
        this.status = false;
        this.$emit("status_toggle", false);
      } else {
        this.status = true;
        this.$emit("status_toggle", true);
      }
    }
  }
};
</script>