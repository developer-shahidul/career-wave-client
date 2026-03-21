import UseAxiosSecure from "../hooks/UseAxiosSecure";

const UseApplicationApi = () => {
  const axiosSecore = UseAxiosSecure();

  const applicationCreateByPromise = (email) => {
    return axiosSecore
      .get(`/applications/applicant?email=${email}`)
      .then((res) => res.data)
      .catch((error) => {
        console.error("My Application fetch error:", error);
        return [];
      });
  };
  return applicationCreateByPromise;
};

export default UseApplicationApi;
