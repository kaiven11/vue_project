import axios from "axios";
import baseUrl from "./config";
import qs from 'qs'

export function gettagList(params) {
  return axios({
    url: baseUrl + "/tagslist/",
    method: "get",
	params:params
  });
}



