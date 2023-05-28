import axios from "axios";

function getLodges() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/lodges`);
  return promise;
}

function getLodgesbyid(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/lodges/${id}`);
  return promise;
}

const lodgesApi = { getLodges, getLodgesbyid };

export default lodgesApi;
