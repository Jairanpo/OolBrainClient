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
      title: "<h1>Rigging</h1>",
      description: `<p>
            Every assets that will have to be animated with the keyframe method, should be correctly configured
            to do so. This department is in charge of the setup of such assets that could be as simple as a prop 
            or as complex as a full CG character.
      </p>`,
      structure_description: `
          <h3>Structure</h3>
          <p class="text-justify">
            Rigging fundamental traits are:<br>
            - The setup must allow the animators to create the desired motion described by the creative department and storyboard.<br>
            - Every node in the setup should follows naming conventions.<br>
            - Clear and clean rigging setups are a must. Avoid convoluted systems using visibility filters if necessary.<br>
            - Before start, make sure every model provided follows naming conventions, every rigger should know by heart the 
            <a href='/pipeline/assets/modeling'>modeling naming conventions.</a><br>
            - Every system should be tested for performance before being used by the animation department.<br>
            - The asset must be at the {0,0,0} world coordinate.
          </p>
      `,
      image:
        "https://forums.newtek.com/attachment.php?attachmentid=104940&d=1339184728",
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
        actions: {
          title: "Actions:",
          description: ` 
            <ul>
              <li>Storyboard.</li>
              <li>Previs or animatic video.</li>
            </ul>
            `
        },
        characters: {
          title: "For Characters:",
          description: ` 
          <ul>
              <li>Object file (.obj).</li>
              <li>Scale guide.</li>
              <li>Concept art.</li>
              <li>Expression sheets.</li>
           </ul>
           `
        },
        props: {
          title: "For Props:",
          description: ` 
            <ul>
              <li>Object file (.obj).</li>
              <li>Motion guide sheets if necessary.</li>
            </ul>
            `
        }
      },
      outputs: {
        scene: {
          title: "Scene",
          description: `<p>
            Clean scene file from the software where the model was created -> NO shaders, layers or unused nodes.<br>
            Each and every single node should be correctly named: mesh, controls, utility nodes, etc.
          </p>`,
        }
      },
      nomenclature: {
        container: {
          type: "Rig Container Group",
          prefix: "",
          name: "Asset name",
          suffix: "",
          node: " | GRP",
          example: "Pikachu_GRP Charmander_GRP Bulbasaur_GRP",
          description:
            "Nothing should be outside this group, when the scene is opened, this is the only thing visible in the outliner.",
          spacing: { direction: "margin-left", amount: "0vw" },
          color:{style: 'background-color: rgb(40, 40, 40)'}
        },
        global: {
          type: "Global Controller",
          prefix: "",
          name: "Global",
          suffix: "",
          node: " | CTL",
          example: "Global_CTL",
          description: 'It should be inside a group named "Global_GRP"',
          spacing: { direction: "margin-left", amount: "2vw" },
          color:{style: 'background-color: rgb(40, 40, 40)'}
        },
        main: {
          type: "Main Controller",
          prefix: "",
          name: "Main",
          suffix: "",
          node: " | CTL",
          example: "Main_CTL",
          description:
            'This controller lives inside the global controller and should be inside a group called "Main_GRP"',
          spacing: { direction: "margin-left", amount: "4vw" },
          color:{style: 'background-color: rgb(40, 40, 40)'}
        },
        geometry: {
          type: "Geometry Group",
          prefix: "",
          name: "Geometry",
          suffix: "",
          node: " | GRP",
          example: "Geometry_GRP",
          description:
            'This group lives inside the "Main_CTL" controller and holds the asset geometry.',
          spacing: { direction: "margin-left", amount: "6vw" },
          color:{style: 'background-color: rgb(40, 40, 40)'}
        },
        rig: {
          type: "Rig Group",
          prefix: "",
          name: "Rig",
          suffix: "",
          node: " | GRP",
          example: "Rig_GRP",
          description:
            'This group lives inside the "Main_CTL" controller and holds the rigging setup groups.',
          spacing: { direction: "margin-left", amount: "6vw" },
          color:{style: 'background-color: rgb(40, 40, 40)'}
        },
        single_contollers: {
          type: "Controllers (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Control name in PascalCase + IK or FK if required.",
          suffix: "",
          node: " | CTL",
          example: "M_Head_CTL R_Shoulder_CTL L_HandIK_CTL",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(60, 60, 60)'}
        },
        multiple_controllers: {
          type: "Controllers (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Control name in PascalCase",
          suffix: "| Number",
          node: " | CTL",
          example: "M_Tail_01_CTL M_Tail_02_CTL M_Tail_03_CTL",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(60, 60, 60)'}
        },
        single_groups: {
          type: "Groups or Nulls (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Asset name in PascalCase",
          suffix: "",
          node: " | GRP",
          example: "M_TeapotSteaming_GRP",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        multiple_groups: {
          type: "Groups or Nulls (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Asset name in PascalCase",
          suffix: " | Number",
          node: " | GRP",
          example: "M_Screw_01_GRP M_Screw_02_GRP M_Screw_03_GRP",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        single_joints: {
          type: "Joints (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Joint name in PascalCase + IK or FK if required.",
          suffix: "",
          node: " | JNT",
          example: "M_Femur_JNT L_FemurIK_JNT L_FemurFK_JNT",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(60,60,60)'}
        },
        multiple_joints: {
          type: "Joints (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Joint name in PascalCase + IK or FK if required.",
          suffix: " | Number",
          node: " | JNT",
          example:
            "M_SpineRibbon_01_JNT M_SpineRibbon_02_JNT M_SpineRibbon_03_JNT",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(60,60,60)'}
        },
        single_curves: {
          type: "Curve (single)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Asset name in PascalCase",
          suffix: "",
          node: " | CRV",
          example: "M_SpineWire_CRV",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
          color:{style: 'background-color: rgb(30, 30, 30)'}
        },
        multiple_curves: {
          type: "Curves (multiple)",
          prefix: '"L" for left, "R" for right and "M" for middle',
          name: " | Asset name in PascalCase",
          suffix: " | Number",
          node: " | CRV",
          example: "M_Spine_01_CRV M_Spine_02_CRV M_Spine_03_CRV",
          description:
            'Always use "M" for assets that don\'t have a right or left side.',
          spacing: { direction: "margin-left", amount: "8vw" },
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