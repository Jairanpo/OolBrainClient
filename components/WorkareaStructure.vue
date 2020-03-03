<template>
  <div>
    <b-list-group>
      <div v-for="(item, index) in structure" :key="index">
        <b-list-group-item v-html="item">{{ item }}</b-list-group-item>
      </div>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "WorkareaStructure",
  data: function _set_data() {
    return {
      structure: [
        `For every pipeline step in a shot, there will always be a <b>Playground</b> and <b>Publish</b> folders.
        `,
        `The <b>Playground</b> folder contains sub folders with the name of the <b>users</b> in the studio, here 
        you will find the folder that belongs to you, inside this folder you can work before publish.
        If you are a freelancer, you can work directly in the root of the <i>Playground</i> folder.
        `,
        `The <b>Publish</b> folder contains sub folders with the current version that has being sent to revision.
        you should create a new folder for every new publish you deliver, for example: "v001", "v002", "v003", etc.<br>
        `,
        `The <b>Publish</b> folder contains the data described below in the <b>Outputs</b> section.<br>
        `
      ]
    };
  }
};
</script>