<template>
    <div class="chart">
      <LineChart
        ref="chart"
        :chart-data="datacollection"
        :options="options"
        :height="100"
      ></LineChart>
    </div>
</template>

<script>
import LineChart from "./LineChart.js";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      chartData: [],
      loaded: false
    };
  },
  computed: {
    ...mapGetters('converter', ["getCurrencyChartData"]),
  },
  mounted() {
    this.fillData();
  },
  watch: {
    getCurrencyChartData(result) {
      this.chartData = result;
      this.loaded = true;
      this.fillData();
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.chartData.map(item => item.date),
        datasets: [
          {
            label: "Value ",
            backgroundColor: "rgba(164, 5, 175, 0.4)",
            borderColor: "#bb9f89",
            pointBackgroundColor: "#bb9f89",
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 8,
            lineTension: 0.4,
            pointHoverBackgroundColor: "#bb9f89",
            pointBorderColor: "#bb9f89",
            data: this.chartData.map(item => item.value)
          }
        ]
      };
      this.options = {
        legend: {
          display: false
        },
        tooltips: {
          bodyFontSize: 14,
          bodyFontStyle: "bold",
          titleFontSize: 14
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#777"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#777"
              }
            }
          ]
        }
      };
    }
  }
};
</script>

<style lang="less">
.chart {
  margin-left: 10px;
  margin-top: 20px;
}
</style>