import axios from "axios";

export default axios.create({
  baseURL: 'https://test.work.afiniti.com:444/API_DEV',
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  // rejectUnauthorized: false,//add when working with https sites
  // requestCert: false,//add when working with https sites
  // agent: false,//add when working with https sites
});