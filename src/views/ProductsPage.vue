<template>
<v-container>
  <template v-if="!Array.isArray(products)">
  </template>
  <template v-else>
    <v-list v-for="product in products" v-bind:key="product.name">
      <v-card
      class="pa-2"
      outlined
      tile
      >
        <v-card-title>{{product.name}}</v-card-title>
        <v-img
          height="300"
          :src = "product.imageURL"
        ></v-img>
        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <div class="black--text ms-20">
              Price: ${{product.price}}
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-list>
  </template>
</v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ProductsPage',
    data () {
      return {
        // products: [{"name":"Logictech G Pro Keyboard","price":129.99,"currency":"USD","imageURL":"https://resource.logitechg.com/w_944,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-hero.png?v=1"}]
        products: null
      }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/products')
      .then(response => {
        this.products = response.data;
        // console.log(response);
        // this.products = [{"name":"Logictech G Pro Keyboard","price":129.99,"currency":"USD","imageURL":"https://resource.logitechg.com/w_944,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-hero.png?v=1"}]
      });
  },
  }
</script>
