<template>
  <div>
    <b-container>
      <Back url="/pipeline"></Back>
      <b-row>
        <b-col>
          <h1 class="mt-3">Assets:</h1>
          <p class="mt-3 text-justify">
            The following are the steps required in the
            <i>assets pipeline</i>, the following documents are inteded to guide
            you on how to correctly deliver your work to the related departments
            in production, you must reference this documents whenever in doubt.
            The pipeline is a continuos process and every tweak to it will be
            reflected here, so stay tuned for any update.
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
  import Back from '@/components/Back';
  import Infocard from '@/components/Infocard';

  export default {
    components: {
      Back,
      Infocard,
    },
    data() {
      return {
        docs: {
          alt: {
            status: false,
            title: 'Alternative (Alt)',
            link: '',
            image:
              'https://fandomfactory.files.wordpress.com/2016/09/spider_verse_by_jonathanpiccini_jp-d9l7kl6.jpg',
            description: `
            Alternative versions of the original asset. The asset hierarchy will be duplicated inside this folder for each new take on the asset appereance or funcionality.
          `,
          },
          artwork: {
            status: false,
            title: 'Artwork',
            link: '',
            image:
              'https://i.pinimg.com/originals/27/d6/eb/27d6eb5625373f527ef488e364a84c8f.jpg',
            description: `
            Design pieces that point to aid artist to reach the desired visuals from the 
            creative direction.
          `,
          },
          modeling: {
            status: true,
            title: 'Modeling',
            link: '/pipeline/assets/modeling',
            image:
              'https://i.pinimg.com/originals/66/06/39/660639e28983cd1eb9392d28b3acbbf0.jpg',
            description: `
            3D model with topology and resolution to reprecent a designed object.
          `,
          },
          rigging: {
            status: true,
            title: 'Rigging',
            link: '/pipeline/assets/rigging',
            image:
              'https://forums.newtek.com/attachment.php?attachmentid=104939&d=1339184688',
            description: `
            Configurated model with controllers to be deformed by the animator.
          `,
          },
          textures: {
            status: false,
            title: 'Textures',
            link: '',
            image:
              'https://docs.unity3d.com/uploads/Main/BumpMapColourMapStoneWallExample.jpg',
            description: `
            Bitmap file with the information necessary to define surfaces
          `,
          },
          shading: {
            status: false,
            title: 'Shading',
            link: '',
            image:
              'https://odederell3d.files.wordpress.com/2018/09/fresnel_off.jpg?w=648',
            description: `
            Definition of surfaces behaviour and its reaction to lights and elements around them.
          `,
          },
          animation: {
            status: false,
            title: 'Animation',
            link: '',
            image:
              'https://media.gettyimages.com/videos/hackers-program-code-running-on-screen-video-id873227696?s=640x640',
            description: `
            Animation utilities, scripts, libraries, pickers or anything that could be useful for 
            animators in the creation of shots
          `,
          },
          vfx: {
            status: false,
            title: 'VFX',
            link: '',
            image:
              'https://i.pinimg.com/originals/37/3c/27/373c27d7b38456abcdcab2831c913e39.jpg',
            description: `
            VFX presets, emmiters or any reusable data that builds a foundation for later work at sequence level
          `,
          },
          cache: {
            status: false,
            title: 'Cache',
            link: '',
            image:
              'https://i.pinimg.com/originals/98/c3/81/98c38103c42f0784911e9615026bd5c2.jpg',
            description: `
            Heavy assets, objects with predefined static animation that are required to be used in cache form
          `,
          },
        },
      };
    },
  };
</script>
