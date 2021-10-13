<template>
  
  <v-app-bar fixed  app color="#2A262E" dark>
            <v-spacer></v-spacer>
           
            <router-link to="/portfolio">
                <a class='route'><v-toolbar-title to="/portfolio">portfolio</v-toolbar-title></a>
            </router-link>

            <router-link to="/converter">
                <a class='route'><v-toolbar-title to="/converter">converter</v-toolbar-title></a>
            </router-link>
            <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
.route {
  font-size: 15px;
  float: center;
  display: inline-block;
  color: grey;
  text-align: center;
  padding: 30px 16px;
  text-decoration: underline;
}
</style>
