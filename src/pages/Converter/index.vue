<template>
  <div>
    <v-container :class="`elevation-${10}`" style="background:#2A262E;color:black;">
      <ConverterForm/>
      <ConverterResult/>
      <CurrencyChart/>
    </v-container>
  </div>
</template>

<script>
import ConverterForm from "./ConverterForm";
import ConverterResult from "./ConverterResult";
import CurrencyChart from "./Chart/CurrencyChart";
import { mapActions } from "vuex";
export default {
  name: "Converter",
  components: {
    ConverterForm,
    ConverterResult,
    CurrencyChart,
  },
  methods: {
    ...mapActions('converter', [ "fetchPriceTest"]),
    initData() {
      this.fetchPriceTest({currencyFrom: 'bitcoin', currencyTo: 'usd'});
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="less">

</style>