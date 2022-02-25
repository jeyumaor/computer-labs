<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Computer Labs Store
        </h1>

        <p class="subheading font-weight-regular">
          View our products page to find computer parts and accessories.
        </p>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage',

    created: () => {
      this.title = 'Home';
    },
  }
</script>
