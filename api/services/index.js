import { URL_AUTHENTICATION, URL_BASE_API } from "../../constants";
import Api from "../Api";
const app = new Api({
  path:
    process.env.URL_BASE_API ||
    process.env.NEXT_PUBLIC_URL_BASE_API ||
    URL_BASE_API,
  auth_url: URL_AUTHENTICATION,
});
export const getService = (service) => {
  return app.service(service);
};
export const authenticate = ({ strategy, email, password, ...params }) => {
  return app.authenticate({
    strategy,
    email,
    password,
    ...params,
  });
};
export const current = () => app.service("current-user").find({});
