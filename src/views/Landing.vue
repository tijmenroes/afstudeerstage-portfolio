<template>
  <v-container fill-height fluid class="landingDiv">
    <v-row> 
      <v-col align="center" justify="center">
      <div class="profileContainer">
      
      
      <div class="profilePic">
        <img src="@/assets/fototijmen.jpg" />
      </div>
      </div>
      <div style="z-index: 99; position: relative">
      
      
        <h1  >Stage portfolio</h1>
        </div>

        <h2>Hoi! Ik ben Tijmen,</h2>
        <h2>Welkom op mijn afstudeer stage portfolio</h2>
        <h2>Het project dat je hier kunt bekijken heet "Een nieuwe DAS".</h2>  
        <v-btn class="mt-5" large color="blue"  rounded @click="openLeeswijzer"  >Leeswijzer</v-btn> 
      
      </v-col>
    </v-row>
    
  </v-container>
  
</template>
<script>
export default {
  methods: {
    openLeeswijzer() {
      window.open("http://i367471.hera.fhict.nl/afstudeerstage/files/" + "leeswijzer" + ".pdf",'_blank');
    }
  }
}

</script>
<style scoped>
h1, h2, h3, p, button {
  color: #E8E8E8;
}
</style>
