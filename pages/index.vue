<template>
  <div class="container">
    <b-row class="mt-5">
      <b-col class="text-center">
        <h1>Welcome</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <p>
          This site is aimed to work as a guide for everyone collaborating
          inside the Ool Digital pipeline.
        </p>
      </b-col>
    </b-row>
    <b-card-group deck class="mt-3">
      <div v-for="(item, name, index) in fields" :key="index">
        <Infocard
          :title="item.title"
          :image="item.image"
          :link="item.link"
          :status="item.status"
          :description="item.description"
        ></Infocard>
      </div>
    </b-card-group>
  </div>
</template>

<script>
  import Infocard from '@/components/Infocard';

  export default {
    components: {
      Infocard,
    },
    data: function set_data() {
      return {
        fields: {
          pipeline: {
            status: true,
            title: 'Pipeline',
            link: '/pipeline',
            description: `
            Data has to be produced and consumed in a way that it increases efficiency, the pipeline its an evolving entity and 
            every step on that evolution will be documented here. Also here you can find a guide on how to structure your work
            before submit to another department.
            `,
            image:
              'https://assets.new.siemens.com/siemens/assets/api/uuid:b9d48b0fc43711e1e9f19c18ed7ef37ac14ddbea/width:3840/quality:high/version:1534344752/pipeline-with-layer.jpg',
          },
          filesystem: {
            status: true,
            title: 'Filesystem',
            link: '/filesystem',
            description: `
            How the data is stored?, if you want to find your way inside the folders at the storage, comprehension of this documentation is key so you don't get lost and 
            can correcly and orderly save your work.`,
            image:
              'https://www.thestorageguy-madison.com/media/1301/storage-files.jpg?anchor=center&mode=crop&width=750&height=400&rnd=131137354680000000',
          },
          toolkis: {
            status: true,
            title: 'Toolkits',
            link: '/toolkits',
            description: `
            Documentation related with software, scripts or plugins developed inside the studio.`,
            image:
              'https://www.plm.automation.siemens.com/media/global/fr/is-820219790-640x360_tcm55-49149.jpg',
          },
        },
      };
    },
  };
</script>
