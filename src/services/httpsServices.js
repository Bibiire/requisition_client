import axios from 'axios';
import { getAccessToken, verifyToken } from '../utils/utilities';
class HttpService {
  constructor() {
    this.token = getAccessToken();
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }

  postData = async (payload, url) => {
    return axios.post(this.baseUrl + url, payload);
  };

  postDataWithToken = async (payload, url) => {
    // verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios
      .post(this.baseUrl + url, payload, {
        headers: { Authorization: AuthStr },
      })
      .then((res) => res);
  };

  getData = async (url) => {
    // verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.get(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };

  getDataWithoutToken = async (url) => {
    return axios.get(this.baseUrl + url).then((res) => res);
  };

  getDataWithToken = async (url) => {
    // verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.get(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };

  putData = async (formData, url) => {
    // verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.put(this.baseUrl + url, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  putDataWithoutToken = async (formData, url) => {
    // verifyToken(this.token);
    return axios.put(this.baseUrl + url, formData);
  };

  deleteData = async (url) => {
    // verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.delete(this.baseUrl + url, {
      headers: { Authorization: AuthStr },
    });
  };
}
export default HttpService;
