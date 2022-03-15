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
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/simple/price',
    params: {ids: 'seedify-fund', vs_currencies: 'usd'},
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
    }
  };
  return axios.request(options as any)
    .then(response => {
      console.log("SFund Price: ", response);
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}
