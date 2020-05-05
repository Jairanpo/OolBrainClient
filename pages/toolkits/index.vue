"use strict";

<template>
  <div>
    <b-container>
      <Back url="/home"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Toolkits:</h1>
          <p class="mt-3 text-justify">
            The toolkits are software that will help us automate repetitive task
            or simplify process in the pipeline.
          </p>
          <nuxtLink
            class="btn-info p-2 float-right"
            to="/pipeline/nomenclatures"
            >Nomenclatures Section</nuxtLink
          >
        </b-col>
      </b-row>

      <b-card-group deck class="mt-3">
        <div v-for="(doc, name, index) in docs" :key="index">
          <Infocard
            :title="doc.title"
            :image="doc.image"
            :link="doc.link"
            :status="doc.status"
            :description="doc.description"
          ></Infocard>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
  import Back from '@/components/Back';
  import Infocard from '@/components/Infocard';

  export default {
    components: {
      Back,
      Infocard,
    },
    data: function data() {
      return {
        docs: {
          maya_installation: {
            title: 'Maya CGToolkits installation.',
            image:
              'https://autodesk.i.lithium.com/t5/image/serverpage/image-id/60227i999B59D83CC81EC9?v=1.0',
            link: 'https://www.youtube.com/watch?v=5b3kCxxbYzY',
            status: true,
            description:
              'This is a short tutorial on how to execute CGToolkits inside Autodesk Maya.',
          },
        },
      };
    },
  };
</script>
