<template>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card :class="`elevation-${10}`" style="background:#2A262E;color:#e3c9a6">
            
          <v-row class="no-gutters">
              <div class="col-auto">
                  <div class="fill-height">&nbsp;</div>
              </div>
              <div class="col pa-3 py-4 ">
                  <h3 class="text-truncate text-uppercase">Coins</h3>
                  <div class="divider update-date" title="Last updated"></div>
                  <p>{{getPortfolioValue.coins.bitcoin.toFixed(2)}} BTC</p>
                  <p>{{getPortfolioValue.coins.ethereum.toFixed(2)}} ETH</p>                     
              </div>                
          </v-row>              
          <CoinsChart />
        </v-card>
      </v-col>   
</template>


<script>
import { mapGetters } from "vuex";
import CoinsChart from './Charts/PortfolioCoinsChart'

export default {
  name: "PortfolioCoins",
  components: {
    CoinsChart,
  },
  
  data() {
    return {
      currencyFrom: "USD",
      currencyTo: "BTC",
      coinsToSell: 'bitcoin',
      cryptoCoinValue: 1
    };
  },
  computed: {
    ...mapGetters('portfolio', ['getPortfolioValue']),
  }
};
</script>