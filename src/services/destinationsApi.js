import axios from "axios";

function getDestinations() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/destinations`);
  return promise;
}

function getDestinationsbyid(id) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/destinations/${id}`
  );
  return promise;
}

const destinationsApi = { getDestinations, getDestinationsbyid };

export default destinationsApi;
