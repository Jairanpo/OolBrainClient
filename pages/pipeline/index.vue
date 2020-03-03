"use strict";

<template>
  <div>
    <b-container>
      <Back url="/home"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Pipeline:</h1>
          <p class="mt-3 text-justify">
            An asset is not build the same way as a shot in a sequence. We need
            to encapsulate every process in the production line so that other
            processes related only access the necessary data from such process,
            with this documentation we will guide you to the understanding of
            the workflow and communication required. A pipeline is a constantly
            evolving creature, and at every update, we will keep this
            documentation evolving as well.
          </p>
          <nuxtLink
            class="btn-info p-2 float-right"
            to="/pipeline/nomenclatures"
          >Nomenclatures Section</nuxtLink>
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
import Back from "@/components/Back";
import Infocard from "@/components/Infocard";

export default {
  components: {
    Back,
    Infocard
  },
  data() {
    return {
      docs: {
        art: {
          status: true,
          link: "/pipeline/art",
          title: "Art",
          image:
            "https://singularityhub.com/wp-content/uploads/2018/03/steal-our-stories-republish-content-singularity-hub-creative-commons-running-holding-colorful-smoke-flare-524175037-1068x601.jpg",
          description: `
            Creation of reference material for the next departments, here is where 
            the most fundamental guides born: scale, time, storytelling, colors, etc.
          `
        },
        asset: {
          status: true,
          link: "/pipeline/assets",
          title: "Assets",
          image:
            "https://us.v-cdn.net/5021068/uploads/editor/dg/j2kbow6ms1ot.png",
          description: `
            Work required for every shot that compose the time related storytelling of a project.
          `
        },
        sequence: {
          status: true,
          link: "/pipeline/sequence",
          title: "Sequence",
          image:
            "https://www.newbluefx.com/wp-content/uploads/2015/04/top-10-edited-sequences.jpg",
          description: `
            Work required for every shot that compose the time related storytelling of a project.
          `
        },
        client: {
          status: false,
          link: "/pipeline/client",
          title: "Client",
          image: "https://www.opustime.com/media/2017/04/imgpsh_fullsize-3.jpg",
          description: `
            References, guidelines and any useful data the production, artists and technicians need
            to know about the client and its need for the project.
          `
        },
        timetable: {
          status: false,
          title: "Timetable",
          link: "",
          image:
            "https://blog.hootsuite.com/wp-content/uploads/2017/06/social-media-content-calendar-940x470.jpg",
          description: `
            Organization, schedules and communication from the production and project managers team.
          `
        },
        Reviews: {
          status: false,
          title: "Reviews",
          link: "",
          image:
            "https://www.reviewpoint.com/wp-content/uploads/2019/06/review.jpg",
          description: `
            Files that the client need to review before proceeding in every 
            step of the pipeline.
          `
        },
        library: {
          status: false,
          title: "Assets Library",
          link: "",
          image:
            "https://i.pinimg.com/originals/00/96/d4/0096d4bc6e2110ba722f72b336916353.jpg",
          description: `
            This is a special storage of assets for projects with sequences that will share resources, and
            it lives at client level instead of sequence level.
          `
        }
      }
    };
  }
};
</script>
