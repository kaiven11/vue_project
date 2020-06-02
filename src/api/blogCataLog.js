import axios from "axios";
import baseUrl from "./config";
import qs from 'qs'

export function getCataList() {
  return axios({
    url: baseUrl + "/getCataLog/",
    method: "get"
  });
}
