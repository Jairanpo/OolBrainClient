<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
      <b-row>
        <b-col cols="6">
          <h1 class="mt-3">Lighting</h1>
          <p class="text-justify">
            Lighting is where the color-values composition are defined, here is
            where the lighting conditions will be stablish.
          </p>
          <hr />
          <h3>Structure</h3>
          <p class="text-justify">
            After the layout department has finished the spacial composition of
            the scene, lighting will complement that work, lighting will
            directly reference the scene output form layout.
          </p>
        </b-col>
        <b-col cols="6" class="mt-3">
          <b-img
            class="border border-dark mt-5"
            src="http://www.azaleaart.com/wp-content/uploads/2012/08/room_mental_ray2.png"
            fluid
            thumbnail
          ></b-img>
        </b-col>
      </b-row>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-structure />
      <b-collapse id="collapse-structure">
        <b-list-group>
          <div v-for="(item, index) in structure" :key="index">
            <b-list-group-item v-html="item">{{ item }}</b-list-group-item>
          </div>
        </b-list-group>
      </b-collapse>
      <hr />
      <h3>Inputs</h3>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-inputs />
      <b-collapse id="collapse-inputs">
        <b-list-group>
          <div v-for="(item, name, index) in inputs" :key="index + 1">
            <b-list-group-item
              href="#"
              active
              class="flex-column align-items-start mt-2"
              variant="dark"
            >
              <b-row align-v="center">
                <b-col cols="1">
                  <h2>{{ sum_one(index) }}</h2>
                </b-col>
                <b-col cols="11" class="mt-1">
                  <h4>{{ item.title }}</h4>
                  <div v-html="item.description">{{ item.description }}</div>
                </b-col>
              </b-row>
            </b-list-group-item>
          </div>
        </b-list-group>
      </b-collapse>
      <hr />
      <h3>Outputs</h3>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-outputs />
      <b-collapse id="collapse-outputs">
        <b-list-group>
          <div v-for="(item, name, index) in outputs" :key="index + 1">
            <b-list-group-item
              href="#"
              active
              class="flex-column align-items-start mt-2 inputs-outputs-list-item"
              variant="dark"
            >
              <b-row align-v="center">
                <b-col cols="1">
                  <h2>{{ sum_one(index) }}</h2>
                </b-col>
                <b-col cols="11" class="mt-1">
                  <h4>{{ item.title }}</h4>
                  <div v-html="item.description">{{ item.description }}</div>
                </b-col>
              </b-row>
            </b-list-group-item>
          </div>
        </b-list-group>
      </b-collapse>
      <hr />
      <h3>Nomenclatures</h3>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-nomenclature />
      <b-collapse id="collapse-nomenclature">
        <Nomenclature :items="nomenclature"></Nomenclature>
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
import Back from "@/components/Back";
import Nomenclature from "@/components/Nomenclature";

export default {
  components: {
    Back,
    Nomenclature
  },
  data: function set_data() {
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
      ],
      inputs: {
        layout: {
          title: "Layout Scene",
          description: `
           <p>Layout scene that comprehend cameras, animation, shaders and set dressing.</p>
          `
        }
      },
      outputs: {
        lighting: {
          title: "Lighting Scene",
          description: `
           <p>Scene with lighting configuration ready to process at rendering.</p>
          `
        }
      },
      nomenclature: {
        scene: {
          type: "Scene",
          prefix: "Shot code",
          name: "| Scene",
          suffix: "| Version",
          node: "",
          example: "SH010_Lighting_v001.ma",
          description: "",
          spacing: { direction: "", amount: 0 },
          color: { style: "background-color: rgb(30, 30, 30)" }
        }
      }
    };
  },
  methods: {
    sum_one: function sum_one(index) {
      return index + 1;
    }
  }
};
</script>
