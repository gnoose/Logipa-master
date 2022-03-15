import axios from 'axios';

export const getBNBPrice = () => {
  return axios
    .get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
    .then(response => {
      console.log("BNB Price: ", response);
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}

export const getSFundPrice = () => {
  return axios
    .get('https://coingecko.arcade.money/?action=coingeckoPrice&id=seedify-fund')
    .then(response => {
      console.log("Seedify Price: ", response);
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}
