<template>
  <div>
    <b-container>
      <Back url="/pipeline"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Sequence:</h1>
          <p class="mt-3 text-justify">
            The following are the steps required in the
            <i>sequences pipeline</i>, the following
            documents are inteded to guide you on how to correctly deliver your work to the related
            departments in production, you must reference this documents whenever in doubt.
            The pipeline is a continuos process and every tweak to it will be reflected here,
            so stay tuned for any update.
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
        footage: {
          status: false,
          title: "Footage",
          link: "/pipeline/sequence/footage",
          image:
            "https://www.oberlo.com/wp-content/uploads/2018/10/image4-2-880x470-c.jpg",
          description: `
            Vide sequence projects where live action is required or reference footage that has to be used in production.
          `
        },
        tracking: {
          status: false,
          title: "Tracking",
          link: "/pipeline/sequence/tracking",
          image:
            "https://cdn.shopify.com/s/files/1/2301/8125/products/DSC00635_1024x1024.jpg?v=1503600349",
          description: `
            Tracking data for matching virtual objects with any given footage.
          `
        },
        previs: {
          status: true,
          title: "Previs",
          link: "/pipeline/sequence/previs",
          image:
            "https://images.squarespace-cdn.com/content/v1/553b37e0e4b0bfb59147db9b/1474185563333-LBPCJT3VMHSM52UI5NNB/ke17ZwdGBToddI8pDm48kDrPwNVXYEunyd5GI-T5dTMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjnGyVxz4_7fGUBBocNlg5GFIaMd2sRlNBQxXhqLPHNahoHUF39SckYf9CqjRTAfQ/Digital_Previs_Behind_The_Scenes_Wide_Setup.jpeg?format=1000w",
          description: `
            Staging of the 3D scene. Cameras and editing are the main concerns here,
            is a process from which the initial distribution of tasks begin.
          `
        },
        animation: {
          status: true,
          title: "Animation",
          link: "/pipeline/sequence/animation",
          image: "http://www.angryanimator.com/tut/pic/002_walkcycle/wlk08.gif",
          description: `
            Design of objecs or character motions and/or expressions.
          `
        },
        vfx: {
          status: true,
          title: "VFX",
          link: "/pipeline/sequence/vfx",
          image:
            "https://evermotion.org/files/publications_images/slider_351_1_2.jpg",
          description: `
            Smoke, fire, water, cloth, grass or any other simulation that a shot might need. 
          `
        },
        assembly: {
          status: true,
          title: "Assembly",
          link: "/pipeline/sequence/assembly",
          image:
            "https://images.freeimages.com/images/premium/previews/5986/59868198-3d-cg-image-of-bird-s-eye-viewing-city.jpg",
          description: `
            Where everything comes together. Cameras, point cached geometries, textures, shaders and light rigs.
          `
        },
        lighting: {
          status: true,
          title: "Lighting",
          link: "/pipeline/sequence/lighting",
          image:
            "https://cdna.artstation.com/p/assets/images/images/002/106/490/large/andrew-stevenson-cgs-vanitassss-render.jpg?1457343790",
          description: `
            Stablish of lighting conditions that the shots will need and render passes setup required.
          `
        },
        render: {
          status: false,
          title: "Render",
          link: "",
          image:
            "https://s3.amazonaws.com/download.retrospect.com/site/products/server_protection_header.jpg",
          description: `
            Computed images with the shading and lighting information neccessary for compositing.
          `
        },
        compositing: {
          status: true,
          title: "Compositing",
          link: "/pipeline/sequence/compositing",
          image:
            "https://acharyaparag.files.wordpress.com/2012/11/node_graph.jpg",
          description: `
            Unification of the images from rendering, here is where the final look of a shot will be defined.
          `
        }
      }
    };
  }
};
</script>