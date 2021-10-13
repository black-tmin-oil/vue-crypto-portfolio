<template>
  <div>
    <v-container :class="`elevation-${10}`" style="background:#2A262E;color:black;">
      <PortfolioValue/>        
        <v-row>
        <PortfolioExchenge/>
        <PortfolioCoins/>
        </v-row>
        </v-container>
  </div>
</template>
<script>
import PortfolioValue from './PortfolioValue'
import PortfolioExchenge from './PortfolioExchenge'
import PortfolioCoins from './PortfolioCoins'

export default {
  name: "Portfolio",
  components: {
    PortfolioValue,
    PortfolioExchenge,
    PortfolioCoins,
    
  },
};
</script>
