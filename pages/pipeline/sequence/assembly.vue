<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
      <Department
        :title="department.title"
        :image="department.image"
        :description="department.description"
        :structure="department.structure"
      ></Department>
      <font-awesome-icon :icon="['fas', 'plus']" v-b-toggle.collapse-structure />
      <b-collapse id="collapse-structure">
        <WorkareaStructure></WorkareaStructure>
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
import WorkareaStructure from "@/components/WorkareaStructure";

export default {
  components: {
    Back,
    Nomenclature,
    Department,
    WorkareaStructure
  },
  data: function set_data() {
    return {
      department: {
        title: "Assembly",
        description: `
          Assembly is the department where everything comes together before
          lighting and render, this department is the pilar of how the final
          scene will look, here you will have a recolection of all the outputs
          from previous departments that create a final scene. But assembly its
          not only about referencing deparment outputs, it is also a creative
          endeavor, here takes one key process, composition. the main phases
          of this procedure are scene assembly, set dressing and final frame
          composition.
        `,
        image:
          "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1031498-mrd2000compv0340183211012r-1200.jpg?itok=9CCENkmR",
        structure: `
         <p class="text-justify">
            The assembly department will reference the data coming from the
            previs, animation and VFX departments and make sure everything comes
            together as its suppoused to be, and make sure that the data is
            ready for lighting and rendering. The main phases of this process
            are:
          </p>
          <ul>
            <li>
              Assembly: Gather the data from the previous departments. <br />
            </li>
            <li>
              Set Dressing - Composition: Fill in the space with objects that
              will help the storytelling and also the composition that support a
              clear communication.
            </li>
          </ul>
        `
      },
      inputs: {
        previs: {
          title: "Previs",
          description: `
           <p>Cameras and editorial information about the shot.</p>
          `
        },
        deformations: {
          title: "Deformable Assets",
          description: `<p>
            Shading scene from the assets that will require deformation and their respective point cache data that describe such deformation.
          </p>`
        },
        vfx: {
          title: "VFX",
          description: `<p>
           Point cache data from the VFX department. 
          </p>`
        },
        environments: {
          title: "Environments",
          description: `<p>
           If it is the case, reference the shaded environment for the shot.
          </p>`
        },
        props: {
          title: "Props",
          description: `<p>
           Reference of the shaded objects that the characters will interact with.
          </p>`
        },
        setdress: {
          title: "Set Dress",
          description: `<p>
           Reference of the shaded objects that populate the shot.
          </p>`
        }
      },
      outputs: {
        scene: {
          title: "Scene",
          description: `<p>
            A composed scene with all the information of the shot ready to be taken by the lighting deparment.
          </p>`
        },
        clip: {
          title: "Clip",
          description: `<p>
                Video clip that showcase the work done by the department. This is very important because it will also be the evidence of your work for revisions.
              </p>`
        }
      },
      nomenclature: {
        scene: {
          type: "Scene",
          prefix: "Shot code",
          name: "| Assembly",
          suffix: "| Version",
          node: "",
          example:
            "SH010_Assembly_v001.ma PDR070_Assembly_v050.ma PDR070_Assembly_v050.ma",
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
