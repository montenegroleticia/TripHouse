import axios from "axios";

function getDestinations() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/destinations`);
  return promise;
}

const destinationsApi = { getDestinations };

export default destinationsApi;
