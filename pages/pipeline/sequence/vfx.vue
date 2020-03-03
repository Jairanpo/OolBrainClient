<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
      <b-row>
        <b-col cols="6">
          <h1 class="mt-3">VFX</h1>
          <p
            class="text-justify"
          >The VFX department is in charge of creating complex animation using simulations based on physics.</p>
          <hr />
          <h3>Structure</h3>
          <p class="text-justify">
            The structure for VFX pipeline posses great flexibility, but for the most part this step has 
            as a principle the purpouse of creating the point cache files or rendered images for the layout or lighting department respectively.
            We alternate between Houdini, Cinema4D and Maya, the software we use will depend on the task, but the output files has to be the same, alembic
            files for the point cache data and exr files for rendered images.
          </p>
        </b-col>
        <b-col cols="6" class="mt-3">
          <b-img
            class="border border-dark mt-5"
            src="https://i.vimeocdn.com/video/526748651_640.jpg"
            fluid
            thumbnail
          ></b-img>
        </b-col>
      </b-row>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-structure />
      <b-collapse id="collapse-structure">
        <b-list-group>
          <div v-for="(item, index) in structure" :key="index">
            <b-list-group-item v-html="item">{{item}}</b-list-group-item>
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
                  <h2>{{sum_one(index)}}</h2>
                </b-col>
                <b-col cols="11" class="mt-1">
                  <h4>{{item.title}}</h4>
                  <div v-html="item.description">{{item.description}}</div>
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
                  <h2>{{sum_one(index)}}</h2>
                </b-col>
                <b-col cols="11" class="mt-1">
                  <h4>{{item.title}}</h4>
                  <div v-html="item.description">{{item.description}}</div>
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
        brief: {
          title: "Brief",
          description: `
           <p>Files that describes shot by shot details about the storytelling for the project.</p>
          `
        },
        breakdown: {
          title: "Breakdown",
          description: `<p>
           Document that describes shot by shot the assets that must be imported to the scene(characters, props, environments, etc).
          </p>`
        },
        colliders: {
          title: "Colliders",
          description: `<p>
           Point cache data of any object that will require the simulation to interact with. This could be one of many types of assets, 
           for example: Animated characters, props, environments, etc.
          </p>`
        }
      },
      outputs: {
        scene: {
          title: "Scene",
          description: `<p>
            Scene file from the software where the animation was created.
          </p>`
        },
        Cache: {
          title: "Cache Folder",
          description: `<p>
                Folder containing the exported alembic file of each referenced asset.
              </p>`
        }
      },
      nomenclature: {
        asset_geometry: {
          type: "Asset Geometry",
          prefix: "Shot code",
          name: "| Asset name in PascalCase",
          suffix: "| Version",
          node: "",
          example: "SH010_JumpingBunny_v001.ma",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        asset_alembic: {
          type: "Asset Alembic",
          prefix: "Shot code",
          name: "| Asset name in PascalCase",
          suffix: "| Version",
          node: "",
          example: "SH010_JumpingBunny_v001.abc",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
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