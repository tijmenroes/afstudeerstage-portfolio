<template>
  <div>
      <v-row class="onTop">
        <v-col md="7" >
          <p class="mt-5" v-scroll-reveal>
            De bovengenoemde samenwerking met TextKernel is al een aantal jaar in stand. Om het proces zo goed mogelijk
            te laten verlopen zijn er een aantal tools ontwikkelt door het JobFeed team. 
            Één van deze tools is de DAS (Domain Administration System). Rechts is een screenshot te zien van de DAS.
          </p>
          <p class="mt-5" v-scroll-reveal>
            De DAS is een platform waar domeinen (die gespiderd worden) bekeken kunnen worden. Hierin is te zien 
            wat de status is, en eventueel hoeveel vacatures op de site te zien zijn. Ook is te zien wat de relatie 
            is van het domein met de andere JobFeed systemen. 
          </p>
          <p class="mt-5" v-scroll-reveal>
            
            Het JobFeed team ondervindt een aantal pijnpunten tijdens het werken met de DAS. 
          </p>

          <v-btn rounded dark color="blue darken-2" class="mt-5" v-scroll-reveal @click="$emit('toPains')" >
            Bekijk pijnpunten
          </v-btn>
        </v-col>
        <v-col md="4" offset-md="1">
          <div class="image-container" v-if="$vuetify.breakpoint.smAndUp">

            <img src="@/assets/das-screenshot.png" v-scroll-reveal/>
            <p class="imageDescr">Screenshot van de huidige DAS</p>

          </div>
        </v-col>
      </v-row>

  </div>
</template>

<style scoped>
h2,
h3,
p,
button {
  color: white !important;
}
img {
  width: 100%;
  height: auto;
}
.image-container {
  position: relative;
}
</style>
