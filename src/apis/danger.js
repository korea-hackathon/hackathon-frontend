import axios from "axios";
import { baseUrl } from "./baseUrl";

export const danger = async () => {
  const response = await axios.get(`${baseUrl}/dangerous-zone`);
  return response;
};
