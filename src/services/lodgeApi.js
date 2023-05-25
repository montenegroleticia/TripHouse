import axios from "axios";

function getLodge() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/lodge`);
  return promise;
}

const lodgeApi = { getLodge };

export default lodgeApi;
