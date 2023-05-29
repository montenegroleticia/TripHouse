import axios from "axios";

function getLodges() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/lodges`);
  return promise;
}

function getLodgesQuery(destinationValue, priceValue) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/lodges/query?destinationValue=${destinationValue}&priceValue=${priceValue}`
  );
  return promise;
}

function getLodgesbyid(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/lodges/${id}`);
  return promise;
}

const lodgesApi = { getLodges, getLodgesbyid, getLodgesQuery };

export default lodgesApi;
