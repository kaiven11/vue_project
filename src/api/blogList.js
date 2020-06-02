import axios from "axios";
import baseUrl from "./config";
import qs from 'qs'

export function getblogList(params) {
  return axios({
    url: baseUrl + "/find/",
    method: "get",
	params:params
  });
}


export function updateViews(params) {
  return axios({
    url: baseUrl + "/views/",
    method: "get",
	params:params
  });
}





