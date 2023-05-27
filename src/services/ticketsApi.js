import axios from "axios";

const REACT_APP_BASE_URL = `http://localhost:5000`;

function getTickets() {
  const promise = axios.get(`${REACT_APP_BASE_URL}/tickets`);
  return promise;
}

function getTicketsbyid(id) {
  const promise = axios.get(`${REACT_APP_BASE_URL}/tickets/${id}`);
  return promise;
}

const ticketsApi = { getTickets, getTicketsbyid };

export default ticketsApi;
