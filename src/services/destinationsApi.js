import axios from "axios";

const REACT_APP_BASE_URL = `http://localhost:5000`;

function getDestinations() {
  const promise = axios.get(`${REACT_APP_BASE_URL}/destinations`);
  return promise;
}

function getDestinationsbyid(id) {
  const promise = axios.get(
    `${REACT_APP_BASE_URL}/destinations/${id}`
  );
  return promise;
}

const destinationsApi = { getDestinations, getDestinationsbyid };

export default destinationsApi;
