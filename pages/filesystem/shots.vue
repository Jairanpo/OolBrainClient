<template>
  <b-container class="my-5">
    <h1>{{title}}</h1>
    <b-row>
      <b-col sm="12" xs="12" md="6">
        <div v-html="description"></div>
      </b-col>
      <b-col md="6">
        <b-img
          fluid
          alt="Responsive image"
          class="d-none d-sm-block border border-dark"
          :src="image"
        ></b-img>
      </b-col>
    </b-row>
    <b-row class="mt-5 mx-3">
      <h2>Subfolders:</h2>
      <br />
    </b-row>
    <b-row class="mx-3">
      <p>The following are the directories where each pipelie step is located for the Ool Digital pipeline.</p>
    </b-row>
    <b-row class="mx-3">
      <b-col>
        <b-list-group v-for="subfolder in subfolders" :key="subfolder.id">
          <b-list-group-item>
            <b-row>
              <b-col>
                <h4>{{subfolder.title}}</h4>
              </b-col>
              <b-col class="float-left">
                <InfoButton @status_toggle="show_info_toggle($event, subfolder)"></InfoButton>
              </b-col>
            </b-row>
            <b-row v-if="subfolder.info">
              <b-col class="text-justify m-3" lg="8" md="12" sm="12" v-html="subfolder.description"></b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>

    <b-row class="mx-3 mt-5">
      <h3>Workarea:</h3>
      <br />
    </b-row>
    <b-row class="m-3">
      <b-col lg="8" md="8">
        <p>
          Inside each pipeline step will be the "workarea", composed
          by two folders: Playground and Publish.
          This two spaces separate the work in progress from the
          actual data that has to flow down the pipeline.
        </p>
      </b-col>
      <b-col lg="2" sm="2">
        <b-img
          fluid
          alt="Responsive image"
          class = "d-md-block d-none"
          src="https://cdn.shopify.com/s/files/1/0685/7915/products/WORK_AREA_AHEAD_O_4422eb82-e2ea-491f-ae78-27a9ca601aac_600x.png?v=1544472392"
        ></b-img>
      </b-col>
    </b-row>
    <b-row class="mx-3 mb-5">
      <b-col>
        <b-list-group v-for="area in workarea" :key="area.id">
          <b-list-group-item>
            <b-row>
              <b-col>
                <h4>{{area.title}}</h4>
              </b-col>
              <b-col class="float-left">
                <InfoButton @status_toggle="show_info_toggle($event, area)"></InfoButton>
              </b-col>
            </b-row>
            <b-row v-if="area.info">
              <b-col class="text-justify m-3" lg="8" md="12" sm="12" v-html="area.description"></b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template> 

<script>
import InfoButton from "@/components/InfoButton";

export default {
  components: {
    InfoButton
  },
  data: function create() {
    return {
      title: "Shots Directory",
      image:
        "/img/filesystem/shots.png",
      description: `
            <div>
            <p>
                This folder holds the shots that compose a sequence, the name 
                of each shot is composed by a two character code and three digits, for example:
                    - SH010<br>
                    - WV030<br>
                    - MT000<br>
            <br>       
                There is a special shot with the "000" digit sequence in its nomenclature, 
                this shot is a multiporpuse folder, here previs artist can work on a 
                sequence as a whole before splitting their work into individual shots.
            <br><br>
                Each shot contain pipeline steps subfolders. 
                Below, you can find more information about this folders, click on the dropdown to learn more about their contents.
            </p>
            </div>`,
      subfolders: {
        audio: {
          info: false,
          title: "00_Audio",
          link: "",
          description: `<p>
                Required audio file for the shot.
            </p>`
        },
        previs: {
          info: false,
          title: "01_Previs",
          link: "/pipeline/sequence/previs",
          description: `<p>
                Camera and staging. <br>
                After pre-production is done, previs kickstart the production process.
            </p>`
        },
        animation: {
          info: false,
          title: "02_Animation",
          link: "/pipeline/sequence/animation",
          description: `<p>
                Motion design for characters, props or graphics. <br>
                - Usually require configured 3D objects for animation from the rigging department.
            </p>`
        },
        vfx: {
          info: false,
          title: "03_VFX",
          link: "/pipeline/sequence/vfx",
          description: `<p>
                Simulations or effects that the product will require and that <br>
                are hard to producte by regular keyframe animation.
            </p>`
        },
        layout: {
          info: false,
          title: "04_Layout",
          link: "/pipeline/sequence/layout",
          description: `<p>
                Scene assembly, set dressing and light rigs.
            </p>`
        },
        lighting: {
          info: false,
          title: "05_Lighting",
          link: "/pipeline/sequence/lighting",
          description: `<p>
                Scene lighting shot by shot.
            </p>`
        },
        render: {
          info: false,
          title: "06_Render",
          link: "/pipeline/sequence/render",
          description: `<p>
                Render passes images processed in CPU or GPU.
            </p>`
        },
        compositing: {
          info: false,
          title: "07_Compositing",
          link: "/pipeline/sequence/compositing",
          description: `<p>
                Render passes composition.
            </p>`
        }
      },
      workarea: {
        playground: {
          info: false,
          title: "Playground",
          description: `<p>
                Area for work that is currently on progress, each artist have their own playground,
                <b>this is a free space</b> where you can have files on your own terms, just be mindful of storage
                usage and delete whatever deprecated data you have.
              </p>`
        },
        publish: {
          info: false,
          title: "Publish",
          description: `<p>
                Publication of version for revision and pipeline flow.
                <b>This is not a free space</b>, before putting data here, there are guidelines
                to be aware of, if you have any doubt please refer to technical support for
                information about how to save your work.
              </p>`
        }
      }
    };
  },
  methods: {
    show_info_toggle: function show_info(status, subfolder) {
      subfolder.info = status;
    }
  }
};
</script>
<style>
</style>