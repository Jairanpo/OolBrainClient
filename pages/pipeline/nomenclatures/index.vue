<template>
     <div>
    <b-container>
      <Back url="/pipeline"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Nomenclatures:</h1>
          <p class="mt-3 text-justify">
            In this section you can find information on the code names for nodes on each specific software package.
          </p>
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
    Back, Infocard
  },
  data() {
    return {
      docs: {
        previs: {
          status: true,
          title: "Autodesk Maya",
          link: "/pipeline/nomenclatures/maya",
          image:
            "https://www.trzcacak.rs/myfile/full/309-3099044_autodesk-maya-computer-icons-autodesk-aqua-turquoise-autodesk.png",
          description: `
          `
        }
      }
    };
  }
};
</script>