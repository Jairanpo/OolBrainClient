<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        A name should be written using only PascalCase, that is, instead of using spaces, we convert into uppercase the first letter in the name.
        For example:
        <b>"teapot steaming"</b>, should be written as
        <b>TeapotSteaming.</b>
      </b-list-group-item>
      <b-list-group-item>Every new field in the naming should be separated with underscore "_", do not use spaces or any other sign.</b-list-group-item>
      <b-list-group-item>Whenever in doubt, ask the technical director for help on how to correctly name your files.</b-list-group-item>
      <b-list-group-item>
        It is important that the version name of the file match the version name of the folder they will be placed,
        for example, files with _v001 version name, should be placed inside v001 folder.
      </b-list-group-item>
      <b-list-group-item>
        The file code, name and version are very important. Naming files correctly will help other artist
        to quickly validate from within their scene whether or not they are working with the correct data.
      </b-list-group-item>
    </b-list-group>
    <b-list-group>
      <div :items="items" v-for="item in items" :key="item.id">
        <div :style="create_item_spacing(item.spacing.direction, item.spacing.amount)">
          <b-list-group-item
            href="#"
            active
            class="flex-column align-items-start mt-2 inputs-outputs-list-item"
            :style="item.color.style"
          >
            <b-row align-v="center">
              <b-col cols="11" class="mt-1">
                <h4 v-html="item.type"></h4>
                <p v-html="item.prefix + item.name + item.suffix + item.node"></p>
                <p>Examples:</p>
                <b-list-group horizontal>
                  <div v-for="example in split_examples(item.example)" :key="example.id">
                    <b-list-group-item class="m-1" style="background:rgb(100,100,100)">{{example}}</b-list-group-item>
                  </div>
                </b-list-group>
                <div class="mt-3" v-if="item.description != ''">
                  <i>{{item.description}}</i>
                </div>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      </div>
    </b-list-group>
    <h5 class="my-3 text-center">
      <b>
        For more information about nodes naming, plese refer to the
        <nuxt-link class="btn-info p-2" to="/pipeline/nomenclatures">
          <b>naming conventions section.</b>
        </nuxt-link>
      </b>
    </h5>
  </div>
</template>

<script>
export default {
  name: "Nomenclature",
  props: {
    items: {
      type: Object
    }
  },
  methods: {
    create_item_spacing: function create_spacing(prefix = "", amount = "") {
      return prefix + ":" + amount;
    },
    split_examples: function split(examples) {
      return examples.split(" ");
    }
  }
};
</script>