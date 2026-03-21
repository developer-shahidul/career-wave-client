import { Suspense } from "react";
// import { jobApplicationsByPromise } from "../../api/jobApi";
import useAuth from "../../hooks/useAuth";
import JobApplicationList from "./JobApplicationList";
import UseJobApi from "../../api/UseJobApi";

const JobApplications = () => {
  const { user } = useAuth();
  const jobApplicationsByPromise = UseJobApi();
  // console.log(user.accessToken);
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div className="text-center ">
              <div className="inline-block h-12 w-12 border-t-4 rounded-full animate-spin border-solid border-yellow-500"></div>
              <p className="mt-4 text-xl text-gray-600">Loading My Jobs...</p>
            </div>
          </>
        }
      >
        <JobApplicationList
          jobApplicationByPromise={jobApplicationsByPromise(user?.email)}
        ></JobApplicationList>
      </Suspense>
    </div>
  );
};

export default JobApplications;
