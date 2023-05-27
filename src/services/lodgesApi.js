import axios from "axios";

const REACT_APP_BASE_URL = `http://localhost:5000`;

function getLodges() {
  const promise = axios.get(`${REACT_APP_BASE_URL}/lodges`);
  return promise;
}

function getLodgesbyid(id) {
  const promise = axios.get(`${REACT_APP_BASE_URL}/lodges/${id}`);
  return promise;
}

const lodgesApi = { getLodges, getLodgesbyid };

export default lodgesApi;
