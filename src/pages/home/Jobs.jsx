import { use } from "react";
import JobsCards from "../shared/JobsCards";

const Jobs = ({ jobsPromise }) => {
  const myJobs = use(jobsPromise);
  // console.log(myJobs);
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="mb-2.5 text-4xl font-bold">Jobs of the day</h2>
        <p className="text-lg font-semibold text-black/60">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {myJobs.map((job) => (
          <JobsCards key={job._id} jobs={job}></JobsCards>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
