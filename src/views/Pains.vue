<template>
  <v-container class="painsDiv">
    <v-row>
      <v-col cols="12" md="4" v-for="pain in pains" :key="pain.name">
        <v-card height="400">
          <v-card-title>
            <v-icon x-large class="painIcon">
              {{ pain.icon }}
            </v-icon>
          </v-card-title>
          <v-card-text>
            <h2>
              {{ pain.name }}
            </h2>
            <p class="context">
              {{ pain.context }}
            </p>
          </v-card-text>
          <v-card-actions style="position: absolute; bottom: 0;">
            <v-container>
              <v-btn
                
                rounded
                dark
                color="blue"
                @click="openModal(pain)"
              >
                Bekijk</v-btn
              >
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog fullscreen hide-overlay v-model="dialog">
      <v-card >
        <v-toolbar color="black" dark>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ selectedPain.name }}</v-toolbar-title>
        </v-toolbar>
        <v-container :fluid="$vuetify.breakpoint.lgAndDown">
        
        
        <v-row>
          <v-col sm="6">
            <div multi-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="item-title"  
                    >Het probleem</v-list-item-title
                  >
                  <p>{{ selectedPain.context }}</p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="item-title"
                    >Onderzoeksvraag</v-list-item-title
                  >
                  <p>{{ selectedPain.details.onderzoeksvraag }}</p>
                </v-list-item-content>
              </v-list-item>
              <!--
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="item-title"
                    >Aanpak</v-list-item-title
                  >
                  <p v-html="selectedPain.details.aanpak"></p>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="item-title"
                    >Conclusie</v-list-item-title
                  >
                  <p v-html="selectedPain.details.oplossing"></p>
                </v-list-item-content>
              </v-list-item>
              -->
            </div>

            
          </v-col>

          <v-col sm="6">
            <v-subheader class="item-title">Producten</v-subheader>

            <v-row class="mt-5" align="stretch">
              <v-col
                xs="6"
                cols="6"
                xl="6"
                v-for="(product, i) in products"
                :key="i"
                @mouseover="product.hover = true"
                @mouseleave="product.hover = false"
              >
                <Product :product="product"> </Product>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import Product from "@/components/Product.vue";
import ProductData from "@/assets/products.json";

export default {
  components: {
    Product,
  },
  // TODO:
  // @click and dialog pop up with more info
  // Maybe more info where it links to
  data() {
    return {
      dialog: false,
      selectedPain: null,
      products: null,
      pains: [
        {
          name: "Authenticatie & Autorisatie",
          id: 1,
          icon: "mdi-security",
          context:
            "De huidige DAS beschikt over een verouderde authenticatie module. Daarnaast kunnen gebruikers kunnen met een workaround data inzien die niet voor hen bedoeld is. ",
          details: {
            onderzoeksvraag:
              "Hoe moeten de authenticatie en autorisatie van de DAS worden opgezet, zodat deze aan industry standards voldoen? ",
            aanpak:
              "Om een antwoord te vinden op de onderzoeksvraag zal eerst onderzocht worden hoe de huidige authenticatie service werkt. Wanneer er een beter inzicht is verkregen over hoe deze werkt, en dus hoe een nieuwe service eruit zou zien, kan een afweging gemaakt worden of een externe authenticatie service nodig is, of dat deze handmatig gebouwd moet worden. Voordat deze afweging gemaakt kan worden moet er eerst een onderzoek gedaan worden naar verschillende authenticatie services. <br> Wanneer er een besluit is gemaakt op de aanpak, zal er via flowcharts worden aangeduid hoe de authenticatie flow eruit zal moeten zien.",
            oplossing:
              "Tijdens dit onderzoek is onderzocht wat de authenticatie en autorisatie provider moet gaan worden voor de DAS. Na het vergelijken van een aantal externe authenticatie services is ervoor gekozen om een intern systeem te gebruiken, namelijk de cockpit. <br> Door de cockpit te gebruiken ontstaan er een aantal voordelen, zo heeft Coosto de controle over het systeem. Wanneer er voor een extern systeem zou gekozen worden, geef je die controle weg, en je betaald ook nog eens de hoofdprijs. <br> Verder, heeft Coosto de configuratie van twee verschillende systemen, in één systeem zitten. Mocht er aanpassingen benodigd zijn, dan hoeven die maar op één plek worden doorgebracht. <br> Een ander voordeel is dat de userbase van de DAS gelijk is aan de cockpit. Gebruikers die een DAS account hebben, zullen ook over een cockpit account beschikken. De user roles kunnen hier worden overgenomen.<br> De nadelen die ontstaan door het gebruiken van de cockpit als authenticatie provider zijn te verwaarlozen. Wél is aangeraden om OpenID Connect toe te passen bij de authenticatie module, zo komt het systeem meer overeen met industry standards. De flow van de authenticatie is te zien op p.24, deze flow zal de OAuth flow nauw volgen. Verder zal gebruik gemaakt worden van de “Authorization code grant”.",
          },
        },
        {
          name: "Usability",
          icon: "mdi-account",
          id: 2,
          context:
            "De huidige DAS heeft een stijl die er verourderd uit ziet. Coosto komt hierdoor niet professioneel over richting TextKernel. De huidige DAS heeft ook een aantal verbeterpunten wat betreft gebruikerservaring. ",
            
          details: {
            onderzoeksvraag:
              "Hoe kan de usability verbeterd worden zodat het nieuwe DAS een betere usability score kan krijgen dan de huidige DAS? ",
            aanpak:
              "Om een antwoord te vinden op deze onderzoeksvraag zal het huidige systeem geanalyseerd worden door middel van een best, good and worse practices onderzoek. <br> Nadat alle mogelijke verbeteringen in kaart zijn gebracht kan door middel van prototyping de pijnpunten worden opgelost. Uit vele iteraties is hier een clickable prototype uit ontstaan. <br> Er zijn usertesten uitgevoerd op het prototype om inzicht te krijgen of deze versie meer intuïtief te gebruiken is  Om een antwoord te vinden op de onderzoeksvraag zal eerst onderzocht worden hoe de huidige authenticatie service werkt. Wanneer er een beter inzicht is verkregen over hoe deze werkt, en dus hoe een nieuwe service eruit zou zien, kan een afweging gemaakt worden of een externe authenticatie service nodig is, of dat deze handmatig gebouwd moet worden. Voordat deze afweging gemaakt kan worden moet er eerst een onderzoek gedaan worden naar verschillende authenticatie services. <br> Wanneer er een besluit is gemaakt op de aanpak, zal er via flowcharts worden aangeduid hoe de authenticatie flow eruit zal moeten zien.",
            oplossing:
              "Tijdens dit onderzoek is onderzocht wat de authenticatie en autorisatie provider moet gaan worden voor de DAS. Na het vergelijken van een aantal externe authenticatie services is ervoor gekozen om een intern systeem te gebruiken, namelijk de cockpit. <br> Door de cockpit te gebruiken ontstaan er een aantal voordelen, zo heeft Coosto de controle over het systeem. Wanneer er voor een extern systeem zou gekozen worden, geef je die controle weg, en je betaald ook nog eens de hoofdprijs. <br> Verder, heeft Coosto de configuratie van twee verschillende systemen, in één systeem zitten. Mocht er aanpassingen benodigd zijn, dan hoeven die maar op één plek worden doorgebracht. <br> Een ander voordeel is dat de userbase van de DAS gelijk is aan de cockpit. Gebruikers die een DAS account hebben, zullen ook over een cockpit account beschikken. De user roles kunnen hier worden overgenomen.<br> De nadelen die ontstaan door het gebruiken van de cockpit als authenticatie provider zijn te verwaarlozen. Wél is aangeraden om OpenID Connect toe te passen bij de authenticatie module, zo komt het systeem meer overeen met industry standards. De flow van de authenticatie is te zien op p.24, deze flow zal de OAuth flow nauw volgen. Verder zal gebruik gemaakt worden van de “Authorization code grant”.",
          },
        },
        {
          name: "Microservice Pattern",
          icon: "mdi-sitemap",
          id: 3,
          context:
            "De huidige DAS heeft een architectuur waarbij er onhandige aanpassingen moeten gemaakt worden, en de modules zijn lastig los te koppelen",
            details: {
            onderzoeksvraag:
              "Welke design pattern moet worden gekozen zodat het de pijnpunten van de huidige DAS oplost, en hoe moet deze worden geïmplementeerd? ",
          },
        },
      ],
    };
  },
  methods: {
    openModal(pain) {
      this.selectedPain = pain;
      this.dialog = true;
      this.products = ProductData.filter((product) => {
      return product.group == pain.id
    });
    },
  },
  created() {
    this.selectedPain = this.pains[0];
    
  },
};
</script>
<style scoped>
p {
  color: #242424;
  line-height: 1.6; 
  font-size: 18px;
}
.context {
  color: #242424;
}
hr {
  border-color: black;
  background-color: black;
}
.v-list-item-title,
.item-title {
  font-size: 2vh;
  color: #4D7BAC !important;
  font-weight: bold !important;
}
</style>
