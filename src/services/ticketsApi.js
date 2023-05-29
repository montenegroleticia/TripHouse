import axios from "axios";

function getTickets() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets`);
  return promise;
}

function getTicketsQuery(destinationValue, priceValue) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets/query?destinationValue=${destinationValue}&priceValue=${priceValue}`);
  return promise;
}

function getTicketsbyid(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/tickets/${id}`);
  return promise;
}

const ticketsApi = { getTickets, getTicketsbyid, getTicketsQuery };

export default ticketsApi;
