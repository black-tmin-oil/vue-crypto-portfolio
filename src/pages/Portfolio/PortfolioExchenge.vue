<template>
<v-col lg="8" cols="sm" class="pb-2">
  <v-card :class="`elevation-${10}`" style="background:#2A262E;color:#e3c9a6">
    <v-row class="no-gutters">
      <div class="col pa-3 py-4 ">
        
        <h3 >EXCHENGE</h3>
        <div class="divider update-date" title="Last updated"></div>
        
      <v-btn-toggle
        v-model="action"
        tile
        color="#e3c9a6"
        group
      >
        <v-btn value="buy" block>
          Buy
        </v-btn>

        <v-btn value="sell" block>
          Sell
        </v-btn>
      </v-btn-toggle>
                  
      <div class="currency-group">
        <!-- form group -->
        <div class="form-group">
          <label class="form-label">Currency</label>
          <vSelect
            :options="options"
            v-model="coinsToSell"
            :value="currencyTo"
            :searchable="false"
          >
          <template v-slot:option="val">
            {{ val.label }}
          </template>
          </vSelect>
        </div>
      </div>
          
      <div class="amount">
        <label class="form-label">Amount</label>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            min="0"
            v-model="amount"
            step="any"
          />
        </div>
      </div>
      <div> 

      <v-btn @click="exchenge" block color="#e3c9a6">
        Exchenge Now
      </v-btn>
      </div>
      </div>
        
    </v-row>
  </v-card>
    
</v-col>
</template>


<script>
import {mapActions } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "PortfolioExchenge",
  components: {
    vSelect
  },
  data() {
    return {
      options: [
        'bitcoin',
        'ethereum'
      ],
      amount: 1,
      currencyTo: "BTC",
      coinsToSell: 'bitcoin',
      action: 'buy'
    };
  },
  methods: {
    ...mapActions('portfolio', ['exchengeCoins']),
    exchenge() {
      this.exchengeCoins({
        cryptoCoin: this.coinsToSell, 
        cryptoCoinValue: this.amount,
        action: this.action
        })
    },

    log() {
      console.log(this.action)
    }
  },
};
</script>

<style lang="less">

.divider {
  width: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 0%;
  color: fade(#e3c9a6, 60);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
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

  .form-control,
  .v-select {
    width: 100% !important;
    height: 48px;
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
    margin-bottom: 5px;
  }
  .currency-group {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .form-control {
      width: 105px;
    }
  }

  .amount {
    margin-bottom: 20px;
    .form-control {
      background-color: #27262E;
      font-size: 20px;
      letter-spacing: 1px;
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


