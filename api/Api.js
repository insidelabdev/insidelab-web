import { URL_BASE_API } from "@/constants/";
class Api {
  constructor({
    path,
    auth_url,
    storageKey = "token",
    accessTokenKey = "accessToken",
  }) {
    if (!path) throw new Error("Base path service not found");
    this.path = path;
    this.auth_url = auth_url;
    this.storageKey = storageKey;
    this.accessTokenKey = accessTokenKey;
    console.log("Instance created!", path);
  }
  authenticate(params) {
    const self = this;
    let { auth_url, path, accessTokenKey, storageKey } = this;
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ...params,
      }),
    };
    return new Promise(async (resolve, reject) => {
      try {
        if (!auth_url) reject("Auth URL is required");
        let res = await fetch(
          `${path}/${auth_url.replace(/\//g, "")}`,
          requestOptions
        );
        let jsonResponse = await res.json();
        if (storageKey) {
          let accessToken = jsonResponse[accessTokenKey];
          Api[storageKey] = accessToken;
        }
        return resolve(jsonResponse);
      } catch (err) {
        reject(err);
      }
    });
  }
  service(service) {
    if (!service) throw new Error("service not defined");
    this.url = service;
    return this;
  }
  find = async ({ query }) => {
    let { url, path, storageKey } = this;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    };
    if (storageKey) headers["Authorization"] = Api[storageKey];
    var requestOptions = {
      method: "GET",
      headers,
    };
    /* query = query ? `?${qs.stringify(query)}` : ""; */
    let params = {};
    url = `${path}/${url}`;
    let q = Object.keys(query).map((key) => {
      if (typeof query[key] == "object") {
        let itemKey = Object.keys(query[key]).map((it) => {
          let itKey =
            `${key}[${it}]` + "=" + encodeURIComponent(query[key][it]);

          return itKey;
        });
        return itemKey.join("&");
      } else {
        return encodeURIComponent(key) + "=" + encodeURIComponent(query[key]);
      }
    });
    q = q.join("&");
    console.log(q);
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(`${url}${q ? "?" + q : ""}`, requestOptions);
        let jsonResponse = await res.json();
        if (jsonResponse.code == 401 || jsonResponse.code == 500)
          reject(jsonResponse.message);
        /* console.log("DATA::", jsonResponse); */
        if (Array.isArray(jsonResponse)) return resolve({ data: jsonResponse });
        return resolve({ data: jsonResponse.data });
      } catch (err) {
        reject(err);
      }
    });
  };
  remove = async (id) => {
    let { url, path, storageKey } = this;
    let query = `/${id}`;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    };
    if (storageKey) headers["Authorization"] = Api[storageKey];
    var requestOptions = {
      method: "DELETE",
      headers,
    };
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) reject("id not found");
        let res = await fetch(`${path}/${url}${query}`, requestOptions);
        let jsonResponse = await res.json();
        if (Array.isArray(jsonResponse)) return resolve({ data: jsonResponse });
        return resolve({ data: jsonResponse.data });
      } catch (err) {
        reject(err);
      }
    });
  };
  get = async (id) => {
    let { url, path, storageKey } = this;
    let query = `/${id}`;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    };
    if (storageKey) headers["Authorization"] = Api[storageKey];
    var requestOptions = {
      method: "GET",
      "Content-Type": "application/json;charset=utf-8",
      headers,
    };
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) reject("id not found");
        let res = await fetch(`${path}/${url}${query}`, requestOptions);
        let jsonResponse = await res.json();
        if (Array.isArray(jsonResponse)) return resolve({ data: jsonResponse });
        return resolve({ data: jsonResponse.data });
      } catch (err) {
        reject(err);
      }
    });
  };
  patch = async (id, params = {}) => {
    let { url, path, storageKey } = this;
    if (query) query = `/${id}`;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    };
    if (storageKey) headers["Authorization"] = Api[storageKey];
    var requestOptions = {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        ...params,
      }),
    };
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) reject("id not found");
        let res = await fetch(`${path}/${url}${query}`, requestOptions);
        let jsonResponse = await res.json();
        if (Array.isArray(jsonResponse)) return resolve({ data: jsonResponse });
        return resolve({ data: jsonResponse.data });
      } catch (err) {
        reject(err);
      }
    });
  };
  create = async (params = {}) => {
    let { url, path, storageKey } = this;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    };
    if (storageKey) headers["Authorization"] = Api[storageKey];
    var requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...params,
      }),
    };
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(`${path}/${url}`, requestOptions);
        let jsonResponse = await res.json();
        if (Array.isArray(jsonResponse)) return resolve({ data: jsonResponse });
        return resolve(jsonResponse);
      } catch (err) {
        reject(err);
      }
    });
  };
}
export default Api;
