import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { message, Spin } from "antd";
import ReactDOM from "react-dom/client";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.css";
class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use((config) => {
      showLoading();
      return config;
    });
    this.instance.interceptors.response.use(
      (res) => {
        hideLoading();
        return res.data;
      },
      (err) => {
        const ErrorStatus = err.response.status;
        hideLoading();
        if (ErrorStatus === 404) {
          message.error("服务器请求未找到~");
        }
        if (err.message === "Network Error") {
          message.warning("网络链接异常！");
        }

        if (err.code === "ECONNABORTED") {
          message.warning("请求超时，请重试");
        }

        return Promise.reject(err);
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.instance.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.instance.request({ ...config, method: "POST" });
  }
}

// 当前正在请求的数量
let requestCount = 0;
// 显示loading
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.createRoot(dom).render(
      <Spin indicator={antIcon} tip="loading..." />
    );
  }
  requestCount++;
}
// 隐藏loading
function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById("loading"));
  }
}

export default new MyRequest(BASE_URL, TIMEOUT);
