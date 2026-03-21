import axios from "axios";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const application = useLoaderData();
  //   console.log(application);
  const handleStatusChange = (e, application_id) => {
    axios
      .patch(
        `https://career-wave-server-sigma.vercel.app/applications/${application_id}`,
        {
          status: e.target.value,
        },
      )
      .then((res) => {
        // console.log(res);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>no.</th>
            <th>Applicant</th>
            <th>GitHub</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {application?.map((application, index) => (
            <tr key={application._id} index={index} job={application}>
              <th>{index + 1}</th>
              <td>{application.applicant}</td>
              <td>{application.github}</td>
              <td>
                <select
                  onChange={(e) => {
                    handleStatusChange(e, application._id);
                  }}
                  defaultValue={application.status}
                  className="select select-secondary"
                >
                  <option disabled={true}>Update Status</option>
                  <option>Panding</option>
                  <option>Interview</option>
                  <option>Hired</option>
                  <option>Reject</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplication;
