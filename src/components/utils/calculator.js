export const calculateBalanceValue = (cryptoCoinValue, d, action, portfolioValue) => {
    const calculateCoin = cryptoCoinValue*d
    switch (action) {
      case 'sell':
        return portfolioValue - calculateCoin;
      case 'buy':
        return portfolioValue + calculateCoin
      default:
        console.log(`Sorry, we are out of `);
    }
  }

export const calculateCoinValue = (cryptoCoin ,cryptoCoinValue, action) => {
  switch (action) {
    case 'sell':
      return cryptoCoin - parseFloat(cryptoCoinValue)
    case 'buy':
      return cryptoCoin + parseFloat(cryptoCoinValue)
    default:
      console.log(`Sorry, we are out of `);
  }
}