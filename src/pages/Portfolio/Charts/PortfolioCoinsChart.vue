<template>
    <div class="bar">
      <BarChart
        ref="bar"
        :chart-data="datacollection"
        :options="options"
        :height="200"
      ></BarChart>
    </div>
</template>

<script>
import BarChart from "./BarChart.js";
import { mapGetters } from "vuex";

export default {
  name: "CoinsChart",
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: null,
      chartData: [],
    };
  },
  computed: {
     ...mapGetters('portfolio', [ 'getPortfolioValue'])
  },
  mounted() {
    this.fillData();
  },
  watch: {
    getPortfolioValue(result) {
      this.chartData = result.coins;
    } 
  },
   methods: {
    fillData() {
      this.datacollection = {
        labels: ['BTC', 'ETH'],
        datasets: [
          {
            data: this.chartData.map(item => item.value)
          }
        ]
      };
      this.options = {
      responsive: true,
      maintainAspectRatio: false
    }
    }
  }
  
};
</script>

