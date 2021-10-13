import axios from "axios";

  const state = {
    url: 'https://api.coingecko.com/api/v3/',

    currencyFrom: null,
    currencyTo: null,
    convertValue: null,
    currencyChartData: {},
    priceTest: null,
  }

  const getters = {
    getCurrencyChartData(state) {
      return state.currencyChartData;
      
    },

    getCurrencyData(state) {
      const {
        priceTest,
        currencyFrom,
        currencyTo,
      } = state;
      return {
        priceTest,
        currencyFrom,
        currencyTo,
      };
    }
  }

  const mutations = {
    ["SET_CURRENCY_DATA"](state, {currencyValue, currencyFrom, currencyTo}) {
      state.priceTest = currencyValue;
      state.currencyFrom = currencyFrom;
      state.currencyTo = currencyTo;

    },
    ["SET_CHART_DATA"](state, value) {
      state.currencyChartData = value;
    },
  }
  
  const actions = {

    async fetchCurrency(
      { commit, state, dispatch },
      { currencyFrom, currencyTo }
      ) {

      try {
        const response = await axios.get(`${state.url}simple/price?ids=${currencyFrom}&vs_currencies=${currencyTo}`);
        const currencyValue = response.data[currencyFrom][currencyTo];
        commit("SET_CURRENCY_DATA", {currencyValue, currencyFrom, currencyTo});

        dispatch("fetchChartData", {
          currencyFrom,
          currencyTo,
        });

      } catch (error) {
        console.log(error);
      }
    },


    async fetchChartData({ commit, state }, { currencyFrom, currencyTo }) {
      try {
        const response = await axios.get(`${state.url}coins/${currencyFrom}/market_chart?vs_currency=${currencyTo}&days=14&interval=daily`);
       
        let d = []
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        response.data.prices.map((i) => {
          let o = new Date(i[0]);
          let newDate = `${o.getDate()} ${monthNames[o.getMonth()]}`;
          d.push({
            date: newDate,
            value: i[1].toFixed(2)
          })
        })
        commit("SET_CHART_DATA", d);

      } catch (error) {
        console.log(error);
      }
    },
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}