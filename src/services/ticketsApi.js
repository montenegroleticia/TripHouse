import axios from "axios";

function getTickets() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets`);
  return promise;
}

const ticketsApi = { getTickets };

export default ticketsApi;
