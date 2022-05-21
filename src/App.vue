<template>
  <v-app>
    <div class="wrapper">
      <Landing />

      <v-container>
        <!--<h1 class="mt-5"> Het Bedrijf</h1> -->
        <!--<hr class="texthr mb-5" /> -->

        <Company />
        <!--
      <hr class="endhr" />
      -->
      </v-container>
      <div class="assignmentDiv">
        <v-container>
          <h1 class="mt-5">
            Opdracht
          </h1>
          <!--
      <hr class="texthr mb-5" />
      -->
          <Assignment @toPains="$vuetify.goTo(target)" />
          <!--
      <hr class="endhr" /> -->
        </v-container>
      </div>
      <v-container>
        <h1 class="mt-5" ref="pains">
          Pijnpunten
        </h1>
        <!--
      <hr class="texthr mb-5" />
      -->

        <Pains />
        <!--
      <hr class="endhr" />
-->
      </v-container>

      <div class="productsDiv">
        <v-container>
          <h1>
            Products
          </h1>

          <Products />

          <h1 class="mt-5">
            Eindresultaat
          </h1>

          <Demo />
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import Landing from "@/views/Landing";
import Assignment from "@/views/Assignment";
import Company from "@/views/Company";
import Pains from "@/views/Pains";
import Products from "@/views/Products.vue";
import Demo from "@/views/Demo.vue";
export default {
  name: "App",
  components: {
    Landing,
    Assignment,
    Company,
    Pains,
    Products,
    Demo,
  },
  data: () => ({
    //
  }),
  computed: {
    target() {
      return this.$refs.pains;
    },
  },
  methods: {
    scrollTo() {
      this.$vuetify.goTo(this.target);
    },
  },
};
</script>
