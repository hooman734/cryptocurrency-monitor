import axios from 'axios';
import process from "process";

export default (req, res) => {

  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const requestOptions = {
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.API_KEY}`
    }
  };

  axios.get(url, requestOptions)
      .then(response => response.data)
      .then(response => response.data)
      .then(response => JSON.stringify(response))
      .then(response => JSON.parse(response))
      .then(response => response.slice(0, 10))
      .then(response => res.status(200).send(response))
      .catch((err) => res.status(404).json(err));
}