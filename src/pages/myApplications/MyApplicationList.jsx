import { use } from "react";
import { Link } from "react-router";

const MyApplicationList = ({ applicationCreateByPromise }) => {
  const myApplications = use(applicationCreateByPromise);
  // console.log(myApplications);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>no.</th>
              <th>Logo</th>
              <th>Category</th>
              <th>ViewJobs</th>
            </tr>
          </thead>
          <tbody>
            {myApplications?.map((application, index) => (
              <tr key={application._id} index={index} job={application}>
                <th>{index + 1}</th>
                <td>
                  +
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={application.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{application.company}</div>
                      <div className="text-sm opacity-50">
                        {application.jobTitle}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{application.category}</td>
                <td>
                  <Link to={`/job/${application.jobId}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
