<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
      <Department
        :title="department.title"
        :description="department.description"
        :image="department.image"
        :structure="department.structure"
      ></Department>
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
import Department from "@/components/Department";

export default {
  components: {
    Department,
    Back,
    Nomenclature
  },
  data: function set_data() {
    return {
      department: {
        title: "Compositing",
        description: `
            When the render process is complete, the Compositing department 
            its the one in charge of merging all the created files into
            the final look of the sequence.
            .`,
        image:
          "https://docs.chaosgroup.com/download/attachments/28410589/AllrenderElementsHero_v01_00000.png?version=2&modificationDate=1490760777000&api=v2",
        structure: `
            This process will use the data from the render process, reference and compose them inside a nodal or layer
            editing software. 
            `
      },
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
        render: {
          title: "Render Data",
          description: `
           <p>All the data coming from the render process has to be join into a cohesive
            final image or sequence that fulfill the graphical requirements of the project.
           </p>
          `
        },
        graphics: {
          title: "Graphics",
          description: `
           <p>Any graphical data that need to be added to the sequence.</p>
          `
        }
      },
      outputs: {
        Compositing: {
          title: "Compositing File",
          description: `
           <p>Editable binary file created in After Effects, Final Cut, Premiere, Da Vinci Resolve or Nuke.</p>
          `
        },
        render: {
          title: "Rendered Video",
          description: "Rendered video .mov uncompress video"
        }
      },
      nomenclature: {
        scene: {
          type: "Editable",
          prefix: "Shotcode",
          name: "| Compositing",
          suffix: "| Version",
          node: "",
          example: "SHT000_Comp_v001.aep PDR010_Comp_v001.aep BMB070_Comp_v005.aep",
          description: `
            All projects will have a three characters shotcode and three digits
            number, if you will work each shot individually, you should save each 
            shot in their correspondent folder, otherwise you can use the shot with
            the 000 digits nomenclature to save a compositing file where you work all of 
            the shots as a whole.
            `,
          spacing: { direction: "", amount: 0 },
          color: { style: "background-color: rgb(30, 30, 30)" }
        },
        video: {
          type: "Video",
          prefix: "Shotcode",
          name: "| Sequence",
          suffix: "| Version",
          node: "",
          example: "SHT000_Sequence_v001.avi PDR010_Sequence_v001.mp4 BMB070_Sequence_v005.mov",
          description: `
            All projects will have a three characters shotcode and three digits
            number, if you will work each shot individually, you should save each 
            shot in their correspondent folder, otherwise you can use the shot with
            the 000 digits nomenclature to save a Compositing where you work all of 
            the shots as a whole.
            `,
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
