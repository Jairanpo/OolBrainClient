<template>
  <div>
    <b-container class="mb-5">
      <Back url="/pipeline/sequence"></Back>
      <b-row>
        <b-col cols="6">
          <h1 class="mt-3">Previs</h1>
          <p class="text-justify">
            This department is in charge of staging the scene, make decisions in terms of the scale of the action,
            how the cameras will behave based on the pitch, storyboards or ideas given from the
            <a
              href="/pipeline/creative"
            >Creative</a> department.
          </p>
          <hr />
          <h3>Structure</h3>
          <p class="text-justify">
            The structure of the scene its very important when it comes to create a homogeneous work, so that we strive to
            share similar and best practices at the creation of a scene, for example, if
            we have a similar structure in every scene, it will be easier to develop tools that search the contents of the
            "CHARACTERS_GRP" and create a document that will help others to know which characters to import,
            also when someone else has to work on a scene that has been previously created by another artists, we reduce
            the amount of guess work that it takes to comprehend others organization.
          </p>
        </b-col>
        <b-col cols="6" class="mt-3">
          <b-img
            class="border border-dark mt-5"
            src="/img/pipeline/previs/structure.jpg"
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
  data: function data() {
    return {
      inputs: {
        brief: {
          title: "Brief",
          description: `
           <p>Text file that describes shot by shot details about the storytelling for the project.</p>
          `
        },
        breakdown: {
          title: "Breakdown",
          description: `<p>
           Document that describes shot by shot the assets that must be imported to the scene(characters, props, environments, etc).
          </p>`
        },
        rigs: {
          title: "Rigs",
          description: `<p>
           All the objects that will require animation must be correctly configured for it and supplied by the rigging department.
          </p>`
        },
        environments: {
          title: "Environments",
          description: `<p>
           In case the environments are defined already, they must be provided with the correct scale so that the scenes are properly setup.
          </p>`
        }
      },
      outputs: {
        cameras: {
          title: "Cameras",
          description: `<p>
                Alembic file that describes the movement of the camera for the shot, it must start at zero and contain the total duration of the animation
              </p>`
        },

        scene: {
          title: "Scene",
          description: `<p>
                    Editable scene for the shot, it must be only the relevant data in it, eliminate elements that are not visible to minimize scene size, it
                    should have only data of that shot, in Maya:</p>
                    <ul>
                        <li>Scene start at 0 frame.</li>
                        <li>Shot in the sequencer editor.</li>
                        <li>Camera rig used for the shot with animation.</li>
                        <li>Referenced assets that appear in the shot.</li>
                    </ul>
              `
        },
        editorial: {
          title: "Editorial",
          description: `<p>
                Exported editorial data from the sequencer window in XML format.
              </p>`
        },
        reference: {
          title: "Reference Geometry",
          description: `<p>
                Alembic file that will serve as a guide on spacial positioning of the assets.
              </p>`
        },
        clip: {
          title: "Clip",
          description: `<p>
                Video clip that showcase the work done by the department. This is very important because it will also be the evidence of your work for revisions.
              </p>`
        }
      },
      structure: [
        `For every shot in a sequence, there will always be a <b>Playground</b> and <b>Publish</b> folders.
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
        `For the workflow in Maya, every shot must be worked from the camera sequencer, every shot
          must be composed with a shot node in the sequencer and its correspondent camera rig.
        `,
        `Every shot time has to match in frames with the timeline, in other words the sequence time 
        must match with the timeline of Maya.
        `,
        `If no environment its provided, one will be created with proxy geometry this has to be notified 
        and delivered to the modeling department in order to provide them with the correct scale and spacial
        relationship of the assets
        `,
        `If a proxy has to be created for the environment, the only place where the modeling has to be detailed 
        and on point its in the contact zones, for example: Tables, floors, etc.
        `,
        `Assets must be ordered as follows:
        <ul>
            <li>Cameras must be inside a group called <b>"CAMERAS_GRP|<i>name_of_camera</i>_CTL"</b></li>
            <li>Characters must be inside a group called <b>"ASSETS_GRP|CHARACTERS_GRP|<i>name_of_asset</i>"</b></li>
            <li>Props must be inside a group called <b>"ASSETS_GRP|PROPS_GRP|<i>name_of_asset</i>"</b></li>
            <li>Environment must be inside a group called <b>"ASSETS_GRP|ENVIRONMENTS_GRP|<i>name_of_asset</i>"</b></li>
            <li>Graphics must be inside a group called <b>"ASSETS_GRP|GRAPHICS_GRP|<i>name_of_asset</i>"</b></li>
            <li>FX must be inside a group called <b>"ASSETS_GRP|FX_GRP|<i>name_of_asset</i>"</b></li>
            <li>Set dress assets must be inside a group called <b>"ASSETS_GRP|SETDRESS_GRP|<i>name_of_asset</i>"</b></li>
            <li>Vehicles assets must be inside a group called <b>"ASSETS_GRP|VEHICLES_GRP|<i>name_of_asset</i>"</b></li>
        </ul>
        Just create the necesary groups to organize the assets on your scene.
        `,
        `
        When creating a sequence, there will always be a <b>"000"</b> shot, for example: <b>SH000</b>, <b>WV000</b>, etc. This is a wildcard multipurpose 
        folder, but it is a great deal specially for previs because in this folder we will work all the shots together in sequence 
        before splitting and distribute each shot individually. Here we can do the editing more easily until approval. For the most part
        we will not split a sequence until the client approval and the work its ready for distribution.
        `
      ],
      nomenclature: {
        scene: {
          type: "Scene",
          prefix: "| Shot code",
          name: "| Scene",
          suffix: "| Version",
          node: "",
          example: "SH010_Previs_v001.ma",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        camera: {
          type: "Camera Alembic",
          prefix: "| Shot code",
          name: "| Camera",
          suffix: "| Version",
          node: "",
          example: "SH010_Camera_v001.abc",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        editorial: {
          type: "Editorial",
          prefix: "| Shot code",
          name: "| Editorial",
          suffix: "| Version",
          node: "",
          example: "SH010_Editorial_v001.xml",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        video: {
          type: "Video",
          prefix: "Shot code",
          name: "| Clip",
          suffix: "| Version",
          node: "",
          example: "SH010_Clip_v001.mov",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        geometry_group: {
          type: "Geometry Group",
          prefix: "",
          name: "| ReferenceGeometry",
          suffix: "",
          node: "",
          example: "ReferenceGeometry.ma",
          description: "",
          spacing: { direction: "", amount: 0 },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        geometry: {
          type: "Geometry",
          prefix: "Shot code",
          name: "| Asset name in PascalCase",
          suffix: "| Version",
          node: "",
          example: "SH010_Teapot_v001",
          description:
            'Geometry files live inside the "ReferenceGeometry" folder',
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

<style>
</style>