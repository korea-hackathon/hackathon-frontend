import axios from "axios";
import { baseUrl } from "./baseUrl";

export const shipLocation = async () => {
  const response = await axios.get(`${baseUrl}/cur/location`);
  return response;
};
