import axios from "axios";
import apiKey from "./api-key";

export default axios.create({
  params: { key: apiKey },
  baseURL: "https://api.rawg.io/api",
});
