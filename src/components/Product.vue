<template>

<div>
        <v-card height="200" light class="container">
          <v-card-title>
            {{ product.name }}
          </v-card-title>
          <v-card-text>
            {{ product.context}}
          </v-card-text>
        <div class="overlay" :class="product.hover ? 'activeOverlay' : 'overlay'">
          <div class="text" >
              <v-btn rounded dark v-if="product.finished" @click="openFile(product)">Bekijk</v-btn>
              <span v-else style="color:black">Nog niet af</span>
          </div>
        </div>
        </v-card>

    <v-dialog v-model="dialog" width="90%" height="80vh">
      <v-card height="80vh" class="dialogContainer">
        <v-card-title>
          {{product.name}} 
              <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
     <v-icon v-if="product.pdf" v-on="on" v-bind="attrs" class="ml-2" @click="openInNew(product.pdf)" alt="open file in new tab">
            mdi-open-in-new
          </v-icon>
      </template>
          <span>Open in new tab</span>
    </v-tooltip>
          
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" >
            mdi-close
          </v-icon>
        </v-card-title>
        <div v-if="product.pdf"  >
        
        
        <object :data="getUrl(product.pdf)" width="100%"   type="application/pdf" class="pdfplayer">
          <span class="ml-4">
              Looks like something is not working! Here is a direct link to the PDF instead. <a :href="product.url">PDF</a> 
            </span>
        <embed :src="getUrl(product.pdf)" width="100%"  type="application/pdf" class="pdfplayer" >
            
        </object>
        </div>
        <v-card-text v-else>
        <p style="color: black ">
          Dit bestand kan niet worden geopend binnen deze site. Klik op de knop voor een redirect om het bestand te bekijken. 
        </p> 
          <v-btn @click="goTo(product.link)" >Bekijk</v-btn>

        </v-card-text>
      </v-card>    
    </v-dialog>
</div>
</template>

<script lang="ts">
export default {
    props: ["product"],
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
   openFile(product) {
     if (product.pdf) {
      //  this.dialog = true;
       this.openInNew(product.pdf)
     } else {
       this.goTo(product.link)
     }
      
    },
    getUrl(filename) {
      return "http://i367471.hera.fhict.nl/afstudeerstage/files/" + filename + ".pdf"
    },
    openInNew(pdf) {
      window.open("http://i367471.hera.fhict.nl/afstudeerstage/files/" + pdf + ".pdf",'_blank');

    },
    goTo(link) {
       window.open(link);
    }
    }
}
</script>

 <style lang="scss" scoped>
 .overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #4D7BAC;
  overflow: hidden;
  width: 100%;
  height:0;
  opacity: 0;
  transition: .2s ease;
}

.activeOverlay {
  bottom: 0;
  opacity: 1;
  height: 100%;
}

.text {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.pdfplayer {
  height: 90vh !important
}
.dialogContainer {
    height: 90vh;
    overflow: hidden;
}
 </style>