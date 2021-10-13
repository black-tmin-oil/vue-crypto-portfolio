<template>
<v-row>
  <v-col lg="12" cols="sm" class="pb-2">
            
      <v-card :class="`elevation-${10}`" style="background:#2A262E;color:#e3c9a6">
          <v-row class="no-gutters">
              <div class="col-auto">
                  <div class="fill-height">&nbsp;</div>
              </div>
              <div class="col pa-3 py-1 ">
                  <h3 class=" text-truncate text-uppercase">balance</h3>
                  <div class="divider update-date" title="Last updated"></div>
                  
                  <h3><span>$</span>{{getPortfolioValue.portfolioValue.toFixed(2)}}</h3>
                  <span class="form-label">USD</span>
              </div>
          </v-row>
      </v-card>
  </v-col>
  </v-row>  
 
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "PortfolioValue",
  computed: {
    ...mapGetters('portfolio', ['getPortfolioValue']),
  },
};
</script>

<style lang="less">

.balance {
  color: #e3c9a6;
}
.portfolioValue {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.v-card {
  // width: var(--app-card-width);
  // min-height: 400px;
  background-color: #29272F;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 20px 20px fade(black, 30);
}
</style>