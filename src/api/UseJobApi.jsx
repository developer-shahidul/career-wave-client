import UseAxiosSecure from "../hooks/UseAxiosSecure";

const UseJobApi = () => {
  const axiosSecore = UseAxiosSecure();
  // nothing commit
  const jobApplicationsByPromise = (email) => {
    return axiosSecore
      .get(`/job/applications?email=${email}`)
      .then((res) => res.data)
      .catch((error) => {
        console.error("My jobs fetch error:", error);
        return [];
      });
  };
  return jobApplicationsByPromise;
};

export default UseJobApi;
