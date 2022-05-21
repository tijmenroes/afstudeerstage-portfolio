<template>
  <div class="companyDiv">
    <h1> Bedrijf</h1>
      <v-row class="onTop">
        <v-col md="7" >
          <p class="mt-5" v-scroll-reveal>
            Coosto is een bedrijf gevestigd in Eindhoven en Alicante. Coosto heeft zo'n 120 werknemers.               
          </p>
          <p class="mt-5" v-scroll-reveal>
            Coosto verkoopt een allround social media tool, bedrijven (groot en klein) kunnen van deze tool gebruik maken om in te zien wat er over hun gezegd wordt, plannen van posts op het juiste tijdstip, en nog veel meer. <br>
            De Coosto tool heeft momenteel meer dan 15.000 gebruikers. 
          </p>
          <p class="mt-5" v-scroll-reveal>
            Buiten de social media tool, heeft Coosto nog een inkomstenbron. Namelijk de samenwerking met TextKernel.  
            Coosto spiderd data uit allerlei verschillende vacature sites en verkoopt deze door aan TextKernel, zij verwerken deze data vervolgens om kandidaten te koppelen aan deze vacatures.
          </p>
          <v-btn color="blue" dark rounded class="mt-5" style="text-align: center; margin: auto"  v-scroll-reveal @click="toCoosto" >
            Lees meer over Coosto
          </v-btn>
        </v-col>
        <v-col md="4" offset-md="1">
      
          <div class="image-container" v-if="$vuetify.breakpoint.smAndUp">
          <!--
            <div class="sphere" v-scroll-reveal.reset></div> -->

            <img src="@/assets/Listen_ENG.svg" />
            <p class="imageDescr">Screenshot van de Coosto media tool</p>
<!--        
            <div class="sphere bottom-sphere" v-scroll-reveal.reset></div>
            -->
          </div>
        </v-col>
      </v-row>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    toCoosto() {
      window.location.href = "https://coosto.com"
    }
  }
}
</script>
<style scoped>
h2,
h3,
p,
button {
  color: black
}
img {
  width: 100%;
  height: auto;
}
.image-container {
  position: relative;
}
</style>
