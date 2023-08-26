import axios from "axios";
import { baseUrl } from "./baseUrl";

export const shipLocation = async () => {
  const response = await axios.get(`http://43.200.155.149:8080/cur/location`);
  return response;
};
