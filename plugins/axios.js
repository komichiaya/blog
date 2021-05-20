import qs from "qs";
// import { Loading } from 'element-ui';
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true //Option allowDots can be used to enable dot notation
    });
    // Loading.service({
    //   lock: true,
    //   text: "Loading",
    //   spinner: "el-icon-loading",
    //   background: "rgba(0, 0, 0, 0.7)",
    //   fullscreen: true,
    // });
    return config;
  });

  $axios.onResponse(response => {
    // Loading.service().close();
    return Promise.resolve(response.data);
  });

  $axios.onError(error => {
    // Loading.service().close();
    return Promise.reject(error);
  });
}
