import axios from "axios";
import {calculateBalanceValue, calculateCoinValue} from './../../components/utils/calculator.js'

const state = {
  url: 'https://api.coingecko.com/api/v3/',
  portfolioValue: 0,
  portfolioBalance: '',
  coins: {
    bitcoin: 0,
    ethereum: 0
  },
  
}

const getters = {

  getPortfolioValue(state) {
    const {
      portfolioValue,
      coins
    } = state;

    return {
      portfolioValue,
      coins
    };
  },
}

const mutations = {
  ["SET_PORTFOLIO_VALUE"](state, {balanceValue, coinValue, cryptoCoin}) {
    state.portfolioValue = balanceValue;
    state.coins[cryptoCoin] = coinValue
  },
}
  
const actions = {

  async exchengeCoins(
    { commit, state },
    { cryptoCoin, cryptoCoinValue, action }
    ) {

    try {
      const response = await axios.get(`${state.url}simple/price?ids=${cryptoCoin}&vs_currencies=usd`);
      const usd = response.data[cryptoCoin].usd;
      const balanceValue = calculateBalanceValue(cryptoCoinValue, usd, action, state.portfolioValue)
      const coinValue = calculateCoinValue(state.coins[cryptoCoin], cryptoCoinValue, action)

      commit("SET_PORTFOLIO_VALUE", {balanceValue, coinValue, cryptoCoin});

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