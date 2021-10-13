<template>
  <div class="conversion-result-wrapper">
    <div class="divider">
    </div>
    
    <div class="conversion-result">
      <div class="conversion-from">
        1
        <span class="currency">{{getCurrencyData.currencyFrom || 'COIN'}}</span>
      </div>
      <span class="equal">=</span>
      <div class="conversion-to">
        {{financial(getCurrencyData.priceTest,2)}}
        <span
          class="currency"
        >{{getCurrencyData.currencyTo || 'VALUTE'}}</span>
      </div>
    </div>
    
    <div class="divider update-date" title="Last updated">
      <ClockIcon size=".9x"></ClockIcon>
      {{today()}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ClockIcon } from "vue-feather-icons";

export default {
  components: {
    ClockIcon
  },
  methods: {
    financial(x, val) {
      return Number.parseFloat(x).toFixed(val);
    },
    today() {
      var today = new Date();
      return today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    }
  },
  computed: {
    ...mapGetters('converter', ["getConvertData", 'getCurrencyData']),
  }
};
</script>

<style lang="less">
.conversion-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 600;
  &-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .equal {
    // font-size: 24px;
    color: var(--color-gray);
    line-height: 1.2;
  }
  .currency {
    font-size: 20px;
    font-weight: 400;
  }
  .conversion {
    &-from {
      font-size: 18px;
      color: var(--color-gray);
    }
    &-to {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-primary);
    }
  }
}
.update-date {
  .feather {
    margin-right: 5px;
  }
}

.divider {
  width: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 0%;
  color: fade(black, 60);
  font-size: 15px;
  font-weight: 400;
}
.divider::before,
.divider::after {
  content: "";
  flex-grow: 1;
  border-top: 1px solid fade(black, 12);
}
.divider::before {
  margin-right: 20px;
}
.divider::after {
  margin-left: 20px;
}
</style>