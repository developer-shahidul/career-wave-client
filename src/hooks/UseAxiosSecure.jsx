import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://career-wave-server-sigma.vercel.app",
  withCredentials: true,
});
const UseAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // interrupts 401 & 403 status
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        signOutUser()
          .then(() => {
            console.log("signOut user");
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default UseAxiosSecure;
