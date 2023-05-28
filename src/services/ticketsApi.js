import axios from "axios";

function getTickets() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets`);
  return promise;
}

function getTicketsbyid(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets/${id}`);
  return promise;
}

const ticketsApi = { getTickets, getTicketsbyid };

export default ticketsApi;
