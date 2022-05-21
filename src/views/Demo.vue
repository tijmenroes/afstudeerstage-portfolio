<template>
  <v-container fluid fill-height>
    <v-row align="center" >
    
      <v-col xl="6" md="6" cols="12" >
        <p>{{ demos[0].context }}</p>
      </v-col>

      <v-col xl="4" md="6" cols="12" class="mt-5 mb-5">
        <div class="videoParent">
          <video controls>
            <source :src="demos[0].video" type="video/mp4" />

            Het lijkt erop dat je browser deze video niet kan afspelen. Klik
            <a :href="demos[0].video">hier</a>
            om hem te bekijken.
          </video>
        </div>
      </v-col>


   <v-col xl="4" md="6" cols="12" class="mt-5 mb-5">
        <div class="videoParent">
          <video controls>
            <source :src="demos[1].video" type="video/mp4" />

            Het lijkt erop dat je browser deze video niet kan afspelen. Klik
            <a :href="demos[1].video">hier</a>
            om hem te bekijken.
          </video>
        </div>
      </v-col>

          <v-col xl="6" md="6" cols="12" >
        <p>{{ demos[1].context }}</p>
      </v-col>

   

       <v-col xl="6" md="6" cols="12" >
        <p>{{ demos[2].context }}</p>
      </v-col>

      <v-col xl="4" md="6" cols="12" class="mt-5 mb-5">
        <div class="videoParent">
          <video controls>
            <source :src="demos[2].video" type="video/mp4" />

            Het lijkt erop dat je browser deze video niet kan afspelen. Klik
            <a :href="demos[2].video">hier</a>
            om hem te bekijken.
          </video>
        </div>
      </v-col>


    
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: "http://i367471.hera.fhict.nl/afstudeerstage/files/das-demo1.mp4",
      demos: [
        {
          context: "De authenticatie en autorisatie van de gateway en frontend.",
          video:
            "http://i367471.hera.fhict.nl/afstudeerstage/files/auth-demo.mp4",
        },
         {
          context: "De functionaliteiten van het nieuwe UI.",
          video:
            "http://i367471.hera.fhict.nl/afstudeerstage/files/func-demo.mp4",
        },
         {
          context: "De deployment van de interface en gateway met docker, kubernetes en kustomize.",
          video:
            "http://i367471.hera.fhict.nl/afstudeerstage/files/deployment-demo.mp4",
        },
      ],
    };
  },
};
</script>

<style scoped>
hr  {
  background-color: #4d7bac;
  width: 50%;
  text-algign: center;
  margin: auto;
  opacity: 0.4;
}
h2 {
  color: #4d7bac;
}
.videoParent {
  overflow: hidden;
}
video {
  height: 100%;
  width: 100%;
}
</style>
