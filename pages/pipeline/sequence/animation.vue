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
      <font-awesome-icon
        :icon="['fas', 'plus']"
        v-b-toggle.collapse-structure
      />
      <b-collapse id="collapse-structure">
        <b-list-group>
          <WorkareaStructure></WorkareaStructure>
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
      <font-awesome-icon
        :icon="['fas', 'plus']"
        v-b-toggle.collapse-nomenclature
      />
      <b-collapse id="collapse-nomenclature">
        <Nomenclature :items="nomenclature"></Nomenclature>
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
  import Back from '@/components/Back';
  import Nomenclature from '@/components/Nomenclature';
  import Department from '@/components/Department';
  import WorkareaStructure from '@/components/WorkareaStructure';

  export default {
    components: {
      Back,
      Nomenclature,
      Department,
      WorkareaStructure,
    },
    data: function set_data() {
      return {
        department: {
          title: 'Animation',
          description: `<p>
            This department is in charge of designing the motion of an asset, 
            make decisions in terms of the storytelling based on the pitch, 
            storyboards or ideas given from the
            <a href="/pipeline/creative">Creative</a> department or clients.
      </p>`,
          structure: `
          <p class="text-justify">
            The structure of the scene its very important when it comes to create a homogeneous work, so that we strive to
            share similar and best practices at the creation of scene, for example, if
            we have a similar structure in every scene, it will be easier to develop tools that search the contents of the
            "CHARACTERS_GRP" and create a document that will help others to know which characters to import,
            also when someone else has to work on a scene that has been previously created by another artists, we reduce
            the amount of guess work that it takes to comprehend others organization.
          </p>
        `,
          image:
            'https://cadenaser00.epimg.net/ser/imagenes/2018/11/06/la_script/1541528368_743196_1541532042_noticia_normal.jpg',
        },
        inputs: {
          brief: {
            title: 'Brief',
            description: `
           <p>Files that describes shot by shot details about the storytelling for the project.</p>
          `,
          },
          breakdown: {
            title: 'Breakdown',
            description: `<p>
           Document that describes shot by shot the assets that must be imported to the scene(characters, props, environments, etc).
          </p>`,
          },
          rigs: {
            title: 'Rigs',
            description: `<p>
           All the assets that will require animation must be correctly configured for it and supplied by the rigging department.
          </p>`,
          },
          environments: {
            title: 'Environments',
            description: `<p>
           In case the environments are defined already, they must be provided with the correct scale so that the scenes are properly setup.
          </p>`,
          },
        },
        outputs: {
          scene: {
            title: 'Scene',
            description: `<p>
            Scene file from the software where the animation was created.
          </p>`,
          },
          Cache: {
            title: 'Cache Folder',
            description: `<p>
                Folder containing the exported alembic file of each referenced asset.
              </p>`,
          },
        },
        nomenclature: {
          asset_geometry: {
            type: 'Asset Geometry',
            prefix: 'Shot code',
            name: '| Asset name in PascalCase',
            suffix: '| Version',
            node: '',
            example: 'SH010_JumpingBunny_v001.ma',
            description: '',
            spacing: { direction: '', amount: 0 },
            color: { style: 'background-color: rgb(30, 30, 30)' },
          },
          asset_alembic: {
            type: 'Asset Alembic',
            prefix: 'Shot code',
            name: '| Asset name in PascalCase',
            suffix: '| Version',
            node: '',
            example: 'SH010_JumpingBunny_v001.abc',
            description: '',
            spacing: { direction: '', amount: 0 },
            color: { style: 'background-color: rgb(30, 30, 30)' },
          },
        },
      };
    },
    methods: {
      sum_one: function sum_one(index) {
        return index + 1;
      },
    },
  };
</script>
