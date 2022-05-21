<template>
  <div style="min-height: 100vh" >
    <span v-for="filter in filters" :key="filter" class="mr-2">
      <v-chip
        :class="activeFilter == filter ? 'activeChip' : 'defaultChip'"
        @click="activeFilter = filter"
      >
        <strong>{{ filter }}</strong>
      </v-chip>
    </span>
    <v-row class="mt-5" align="stretch">
      <v-col
        cols="12"
        sm="6"
        xl="3"
        v-for="(product, i) in filteredProducts"
        :key="i"
        @mouseover="product.hover = true"
        @mouseleave="product.hover = false"
        
      >
      <Product :product="product"> </Product>


      </v-col>
    </v-row>


  </div>
</template>

<script>
import Product from "@/components/Product.vue"
import ProductData from "@/assets/products.json"
export default {
  components: {
    Product
  },
  data() {
    return {
      activeFilter: "Alles",
      filters: ["Alles", "Research", "Development", "Design"],
      filteredProducts: [],
    };
  },
  watch: {
    activeFilter(filter) {
      let filtered = [];
      if (filter == "Alles") {
        filtered = ProductData
      } else {
        filtered = ProductData.filter((product) => {
          return product.tag.includes(filter);
        });
      }
      this.filteredProducts = filtered;
    },
  },
  created() {
    this.filteredProducts = ProductData;

  },
};
</script>


