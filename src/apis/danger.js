import axios from "axios";
import { baseUrl } from "./baseUrl";

export const danger = async () => {
  const response = await axios.get(`http://43.200.155.149:8080/dangerous-zone`);
  return response;
};
