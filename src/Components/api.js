import axios from 'axios';
const baseURL = 'https://5f5ff7f790cf8d00165573ed.mockapi.io/';

export function getData(url) {
   return axios
      .get(baseURL + url)
      .then((response) => {
         return response.data;
      })
      .catch((err) => {
         return err;
      });
}

export function postData(url, body) {
   return axios
      .post(baseURL + url, body)
      .then((response) => {
         return response.data;
      })
      .catch((err) => {
         return err;
      });
}
