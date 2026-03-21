import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkedIn = form.linkedIn.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      resume,
      github,
      linkedIn,
    };

    // console.log(application);
    axios
      .post(
        "https://career-wave-server-sigma.vercel.app/applications",
        application,
      )
      .then((result) => {
        // console.log(result.data.insertedId);

        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log("Application data not loaded", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit application",
        });
      });
  };
  return (
    <div>
      <h3 className="text-3xl py-5">
        Apply for this job :{" "}
        <Link to={`/jobs/${jobId}`} className="hover:cursor-pointer font-bold">
          Details
        </Link>
      </h3>

      <form onSubmit={handleApplySubmit} className="w-full">
        <fieldset className="fieldset w-full bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label ">GitHub Link</label>
          <input
            type="url"
            className="input w-full"
            name="github"
            required
            placeholder="https://github.com/..."
          />

          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input w-full"
            name="linkedIn"
            required
            placeholder="https://linkedIn.com/..."
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input w-full"
            name="resume"
            required
            placeholder="https://resume.com/..."
          />

          <input
            type="submit"
            className="btn btn-secondary btn-lg w-full"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
