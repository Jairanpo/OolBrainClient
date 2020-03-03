<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/assets"></Back>
      <b-row>
        <b-col cols="6">
          <div class="mt-3" v-html="title"></div>
          <div class="text-justify" v-html="description"></div>
          <hr />
          <div v-html="structure_description"></div>
        </b-col>
        <b-col cols="6" class="mt-3">
          <b-img class="border border-dark mt-5" :src="image" fluid thumbnail></b-img>
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
"use static";
import Back from "@/components/Back";
import Nomenclature from "@/components/Nomenclature";

export default {
  components: {
    Back,
    Nomenclature
  },
  data: function set_data() {
    return {
      title: "<h1>Modeling</h1>",
      description: `<p>
            This department is in charge of creating the objects required for a project. The 
            modeler has to be able to make a virtual three dimensional interpretation of a design 
            or a real world object, such as that this object help convey the vision from 
            clients and creatives.
      </p>`,
      structure_description: `
          <h3>Structure</h3>
          <p class="text-justify">
            Any model has a set of fundamental traits that has to acomplish:<br>
            - The model has to clearly reprecent the object that was specified to reproduce.<br>
            - Has to deliver correct topology in order to help define the object with a optimal amount of polygons as well to fullfil the needs for deformation coming from the rigging department.<br>
            - Following the given naming convention and organization.
          </p>
      `,
      image:
        "https://i.materialise.com/blog/wp-content/uploads/2015/07/3d-printing-Characters-and-figurines.png",
      structure: [
        `For every pipeline step in a shot, there will always be a <b>Playground</b> and <b>Publish</b> folders.
        `,
        `The <b>Playground</b> folder contains sub folders with the name of the <b>users</b> in the studio, here 
        you will find the folder that belongs to you, inside this folder you can work before publish.
        If you are a freelancer, you can work directly in the root of the <i>Playground</i> folder.
        `,
        `The <b>Publish</b> folder contains sub folders with the current version that has being sent to revision.
        you should create a new folder for every new publish you send, for example: "v001", "v002", "v003", etc.<br>
        `,
        `The <b>Publish</b> folder contains the data described below in the <b>Outputs</b> section.<br>
        `,
        `
        Just create the necesary groups to organize the assets on your scene.
        `
      ],
      inputs: {
        Environments: {
          title: "For Environments:",
          description: `
            <ul>
              <li>Concept art.</li>
              <li>Isometric views.</li>
              <li>Previs proxy environments.</li>
           </ul>
          `
        },
        characters: {
          title: "For Characters:",
          description: ` 
          <ul>
              <li>Scale guide.</li>
              <li>Concept art.</li>
              <li>Ortographic views.</li>
           </ul>
           `
        },
        props: {
          title: "For Props and Set Dressing Assets:",
          description: ` 
            <ul>
              <li>Concept art.</li>
              <li>Ortographic views.</li>
            </ul>
            `
        }
      },
      outputs: {
        scene: {
          title: "Scene",
          description: `<p>
            Scene file from the software where the model was created.
          </p>`
        },
        Objects: {
          title: "Objects",
          description: `
            <p>
              Exported as \".obj\".
            </p>
            `
        }
      },
      nomenclature: {
        single_geometry: {
          type: "Geometry (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Geometry name in PascalCase",
          suffix: "",
          node: " | GEO",
          example: "M_Body_GEO",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        multiple_geometry: {
          type: "Geometry (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Geometry in PascalCase + tree characters index",
          suffix: "| Number",
          node: " | GEO",
          example: "M_Screw_01_GEO M_Screw_02_GEO M_Screw_03_GEO",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        single_groups: {
          type: "Groups or Nulls (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Group name in PascalCase",
          suffix: "",
          node: " | GRP",
          example: "M_Body_GRP",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        multiple_groups: {
          type: "Groups or Nulls (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Group name in PascalCase",
          suffix: " | Number",
          node: " | GRP",
          example: "M_Screw_01_GRP M_Screw_02_GRP M_Screw_03_GRP",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
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