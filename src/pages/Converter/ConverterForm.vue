<template>
  <!-- app form -->
  <div class="app-form">
    <div class="currency-group">
      <!-- form group -->
      <div class="form-group">
        <label class="form-label">From</label>
        <vSelect
          :options="selectCurrencyFrom"
          v-model="currencyFrom"
          :value="getPriceTest"
          @input="reqPriceTest()"
          :searchable="false"
        >
          <template v-slot:option="val">
            {{ val.label }}
          </template>
        </vSelect>
      </div>
      
      <div class="divider update-date" >
                </div>
      <div class="form-group">
        <label class="form-label">To</label>
        <vSelect
          :options="selectCurrencyTo"
          v-model="currencyTo"
          :value="getPriceTest"
          @input="reqPriceTest()"
          :searchable="false"
        >
          <template v-slot:option="val">
            {{ val.label }}
          </template>
        </vSelect>
      </div>
    </div>
    <!-- end / currency group -->
  </div>
  <!-- end / app form -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect
  },
  data() {
    return {
      selectCurrencyFrom: [
      "bitcoin",
      "ethereum",
    ],
    selectCurrencyTo: [
      "btc",
      "usd",
      "eth",
    ],
      currencyFrom: "bitcoin",
      currencyTo: "usd",
    };
  },
  methods: {
    ...mapActions('converter', [ "fetchCurrency"]),
    reqPriceTest() {
      this.fetchCurrency({
        currencyFrom: this.currencyFrom,
        currencyTo: this.currencyTo,
      });
    },
  },
  computed: {
    ...mapGetters('converter', ['getPriceTest']),
  },
  mounted() {
    this.reqPriceTest();
    
  },
};
</script>

<style lang="less">
// app form
.app-form {
  .form-control,
  .v-select {
    width: 100% !important;
    // height: 48px;
    border: 2px solid #ccc;
    border-radius: 100px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    font-weight: 600;
    transition: all 350ms;
    &:focus {
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    }
  }
  .form-control + .form-control {
    margin-left: 20px;
  }
  .form-label {
    display: block;
    font-size: 18px;
    color: var(--color-gray);
    // margin-bottom: 5px;
  }

  .currency-group {
    display: flex;
    align-items: flex-center;
    justify-content: space-between;
    justify-content: center;
    .form-control {
      width: 105px;
    }
  }
}

.v-select {
  display: flex;
  width: auto;
  min-width: 1em;
  padding-left: 10px !important;
  padding-right: 10px !important;
  width: 100%;
}
.vs__selected {
  padding: 0;
  min-width: 60px;
}
.vs__dropdown-toggle {
  border: 0;
}
.vs__selected-options {
  flex-wrap: nowrap;
}
.vs--single.vs--open .vs__selected {
  position: relative;
  opacity: 1;
  color: var(--color-primary) !important;
}
.vs__clear {
  display: none;
}
.vs__actions {
  display: flex;
  align-items: center;
  padding: 0;
  padding-right: 5px;
  padding-top: 5px;
}
.vs__search {
  // display: none;
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
}
.vs__dropdown-option {
  display: flex;
  align-items: center;
  padding: 6px 20px;
}
.vs--open {
  border-color: var(--color-primary) !important;
}
</style>