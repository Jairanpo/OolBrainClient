<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
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
import Back from "@/components/Back";
import Nomenclature from "@/components/Nomenclature";

export default {
  components: {
    Back,
    Nomenclature
  },
  data() {
    return {
      title: "<h1>Art:</h1>",
      image:
        "https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/blogposts/howtobeconstantlycreative.jpg",
      description: `<p>
           The art department process is in charge of kick-start preproduction for 
           every project in the studio. This department has close relationship 
           with the client, artist here are responsible for pitching ideas, 
           create the visual interpretation for clients approval and reference 
           for artist down the pipeline in the production phase of the project.      
      </p>`,
      structure_description: `
          <h3>Structure</h3>
          <p class="text-justify">
             It is very important to create the most specific documentation at this 
           process, the more accurate guide this process can create will be crutial
            to target every project needs and avoid unecessary workload on other 
            departments.
          </p>
      `,
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
        `
      ],
      inputs: {
        brief: {
          title: "Client",
          description: `
           <p>Files from client describing the concept to create.</p>
          `
        }
      },
      outputs: {
        storyboard: {
          title: "Storyboard",
          description: `<p>
            Graphic representation of the sequence to create and key at the previs stage.
          </p>`
        },
        concept: {
          title: "Concept Design",
          description: `<p>
            Assets design, here we define the characters, environments, props or any
            other object that will be necessary for the production pipeline.
          </p>`
        },
        animatic: {
          title: "Animatic",
          description: `<p>
            Video sequence that will work as a guideline to the previs department, it is 
            a basic visual representation clip of the sequence but with clear storytelling 
            based on the need of the client and the input from the art department.
          </p>`
        },
        graphics: {
          title: "Graphics",
          description: `<p>
            Bitmap files specifically produces to be used in the project, this are not design
            of assets, this are assets on its own.
          </p>`
        },
        references: {
          title: "References",
          description: `<p>
            Inspiration documents or files, some ideas might be clearer to show from a reference, 
            also here will be stored all the data that inspire the creative process.
          </p>`
        }
      },
      nomenclature: {
        // CONCEPT DESIGN
        concept_design_folder: {
          type: "Concept Design Folder",
          prefix: "",
          name: "Asset type",
          suffix: "",
          node: "",
          example:
            "Art/ConceptDesign/Environments Art/ConceptDesign/Characters Art/ConceptDesign/Props",
          description: "Concept design folder organization.",
          spacing: { direction: "margin-left", amount: "0vw" },
          color: { style: "background-color: rgb(60, 60, 50)" }
        },
        concept_design_asset_folder: {
          type: "Asset Folder",
          prefix: "",
          name: "Asset Name",
          suffix: "",
          node: "",
          example:
            "ConceptDesign/Character/OsitoBimbo ConceptDesign/Environments/VillaBimbopolis",
          description:
            "Asset type separation folder, this will help to avoid characters and environments to be mixed at the same level of a directory.",
          spacing: { direction: "margin-left", amount: "2vw" },
          color: { style: "background-color: rgb(65, 65, 50)" }
        },
        concept_design_asset_version: {
          type: "Version",
          prefix: "",
          name: "Version",
          suffix: "",
          node: "",
          example:
            "ConceptDesign/Character/OsitoBimbo/v001 ConceptDesign/Environments/VillaBimbopolis/v002",
          description: "Current work version nomenclature.",
          spacing: { direction: "margin-left", amount: "4vw" },
          color: { style: "background-color: rgb(70, 70, 50)" }
        },
        concept_design_image: {
          type: "Image",
          prefix: "Asset name",
          name: "| Type",
          suffix: "| Version",
          node: "",
          example:
            "OsitoBimbo/v001/OsitoBimbo_Ortographic_v001.jpg Mantecada/v002/Mantecada_HalloweenWitchCostume_v002.jpg",
          description: "This files has to be put inside the version folder.",
          spacing: { direction: "margin-left", amount: "6vw" },
          color: { style: "background-color: rgb(75, 75, 50)" }
        },
        // STORYBOARD
        storyboard_folder: {
          type: "Storyboard folder",
          prefix: "",
          name: "Asset type",
          suffix: "",
          node: "",
          example: "Storyboard/v001 Storyboard/v002 Storyboard/v003",
          description:
            "Should only contain at its root the iteration versions, no files or other directories.",
          spacing: { direction: "margin-left", amount: "0vw" },
          color: { style: "background-color: rgb(50, 60, 60)" }
        },
        storyboard_version: {
          type: "Version",
          prefix: "",
          name: "Version",
          suffix: "",
          node: "",
          example: "v001 v002 v011 v085 v120",
          description: "Current work version nomenclature.",
          spacing: { direction: "margin-left", amount: "4vw" },
          color: { style: "background-color: rgb(50, 65, 65)" }
        },
        storyboard_pdf: {
          type: "Document",
          prefix: "Project name",
          name: " | Storyboard",
          suffix: " | version",
          node: "",
          example:
            "v001/TemporalidadesVerano_Storyboard_v001.pdf v023/Halloween_Storyboard_v023.pdf",
          description:
            "Document version of the storyboard, it can contain further descriptive information.",
          spacing: { direction: "margin-left", amount: "6vw" },
          color: { style: "background-color: rgb(50, 70, 70)" }
        },
        storyboard_sequence: {
          type: "Video",
          prefix: "Project name",
          name: " | Storyboard",
          suffix: " | version",
          node: "",
          example:
            "v001/TemporalidadesVerano_Storyboard_v001.mov v023/Halloween_Storyboard_v023.mov",
          description: "Exported video sequence.",
          spacing: { direction: "margin-left", amount: "6vw" },
          color: { style: "background-color: rgb(50, 70, 70)" }
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