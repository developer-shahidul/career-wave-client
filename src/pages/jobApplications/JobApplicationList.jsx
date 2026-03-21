import { use } from "react";
import { Link } from "react-router";

const JobApplicationList = ({ jobApplicationByPromise }) => {
  const jobApplication = use(jobApplicationByPromise);
  // console.log("job Applications", jobApplication);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>no.</th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>Apply Count</th>
                <th>View Applications</th>
              </tr>
            </thead>
            <tbody>
              {jobApplication?.map((jobs, index) => (
                <tr key={jobs._id} index={index} jobs={jobs}>
                  <th>{index + 1}</th>
                  <td>{jobs.jobTitle}</td>
                  <td>{jobs.deadline}</td>
                  <td>{jobs.Application_count}</td>
                  <td>
                    <Link to={`/viewApplication/${jobs._id}`}>
                      <button className="btn btn-ghost btn-xs">
                        view Applications
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationList;
