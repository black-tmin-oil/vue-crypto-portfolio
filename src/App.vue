<template>
  <div id="app" class="app">
  
    <Header />
      
    <v-app>
        <v-content>
      <v-container style="background:#332e38" fluid fill-height >
        <v-layout justify-center align-center>
          <v-flex xs12 md8>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> 
    </v-app>  
    
  </div>
  
</template>


<script>

import Header from './components/layout/Header'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>



<style lang="less">
:root {
  --color-primary: #bb9f89;
  --color-secondary: #bb9f89;
  --color-gray: #999;
  --font-family: "Jost";
  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

