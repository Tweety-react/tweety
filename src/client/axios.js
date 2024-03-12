import axios from "axios";
import {baseUrl} from "../constants";

const handleRequest = (url) => {
  return axios({
    url: `${baseUrl}${url}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
};

export const handlePostRequest = (url, data) => {
  return axios({
    url: `${baseUrl}${url}`,
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    data: data,
  });
};

export const handleDeleteRequest = (url, data) => {
  return axios({
    url: `${baseUrl}${url}`,
    method: "Delete",
    headers: {
      Accept: "application/json",
    },
    data: data,
  });
};

export default handleRequest;
