import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    // console.log(jobData);

    // process salary range data
    const { min, max, currency, ...createJob } = jobData;
    createJob.salaryRange = { min, max, currency };
    // console.log(newJob);

    // process requirment
    const requirementsString = createJob.requirements;
    const requirementsDurty = requirementsString.split(",");
    const requirementsClean = requirementsDurty.map((res) => res.trim());
    createJob.requirements = requirementsClean;

    // process responsibilities
    createJob.responsibilities = createJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    createJob.status = "Active";
    console.log(createJob);

    // save job to the database
    axios
      .post("https://career-wave-server-sigma.vercel.app/job", createJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been saved and published.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
    // console.log(requirementsClean);
  };

  return (
    <div>
      <form
        onSubmit={handleAddJob}
        className="max-w-4xl mx-auto bg-[#3c65f507] "
      >
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-indigo-600">
            Post a New Job
          </h2>

          {/* Job Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Job Title
              </span>
            </label>
            <input
              type="text"
              name="jobTitle"
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="Frontend Developer"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Company Name
              </span>
            </label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="CareerCode Ltd."
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Location
              </span>
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="Dhaka, Bangladesh"
              required
            />
          </div>
          {/* company logo */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Company logo
              </span>
            </label>
            <input
              type="text"
              name="company_logo"
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="Company Logo Url"
              required
            />
          </div>
        </fieldset>
        {/* Job Type */}
        <fieldset className="bg-linear-to-br  rounded-2xl p-6 space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold  text-indigo-600">Job Type</h2>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              value="All"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On_Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* job category */}
        <fieldset className="bg-linear-to-br  rounded-2xl p-6 space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold  text-indigo-600">Job Category</h2>

          <select
            defaultValue="Job Category"
            name="category"
            className="select input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
          >
            <option disabled={true}>Job Category</option>
            <option>Enginnering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold text-indigo-600">
            Application Deadline
          </h2>

          <input
            className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
            type="date"
            name="deadline"
            id=""
          />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="bg-linear-to-br  rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold  text-indigo-600">Salary Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Minimum Salary
                </span>
              </label>
              <input
                type="text"
                name="min"
                className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
                placeholder="Minimum Salary"
                required
              />
            </div>
            {/* Maximum Salary */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Maximum Salary
                </span>
              </label>
              <input
                type="text"
                name="max"
                className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
                placeholder="Maximum Salary"
                required
              />
            </div>
            {/*Currency */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Currency
                </span>
              </label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select hover:cursor-pointer input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>US</option>
                <option>USD</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* job description */}
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold text-indigo-600">Job Description</h2>

          <textarea
            className="textarea  hover:cursor-pointer input input-bordered w-full 
          focus:border-indigo-400 focus:ring focus:ring-indigo-200"
            name="description"
            placeholder="Description"
          ></textarea>
        </fieldset>
        {/* job Requirements */}
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold text-indigo-600">
            Job Requirements
          </h2>

          <textarea
            className="textarea  hover:cursor-pointer input input-bordered w-full 
          focus:border-indigo-400 focus:ring focus:ring-indigo-200"
            name="requirements"
            placeholder="Requirements (HTML, CSS, JavaScript)"
          ></textarea>
        </fieldset>
        {/* job Responsibilities */}
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold text-indigo-600">
            Job Responsibilities
          </h2>

          <textarea
            className="textarea  hover:cursor-pointer input input-bordered w-full 
          focus:border-indigo-400 focus:ring focus:ring-indigo-200"
            name="responsibilities"
            placeholder="Develop and maintain software,Collaborate with the team,Participate in code reviews"
          ></textarea>
        </fieldset>
        {/* job HR related info */}
        <fieldset className="bg-linear-to-br rounded-2xl p-6  space-y-5">
          {/* Title */}
          <h2 className="text-xl font-bold text-indigo-600">HR Related Info</h2>

          {/* Job Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                HR Name
              </span>
            </label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user.displayName}
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="HR Name"
              required
            />
          </div>
          {/* Job Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                HR Email
              </span>
            </label>
            <input
              type="text"
              name="hr_email"
              defaultValue={user.email}
              className="input input-bordered w-full focus:border-indigo-400 focus:ring focus:ring-indigo-200"
              placeholder="HR Email"
              required
            />
          </div>
        </fieldset>

        {/* Button */}
        <div className="p-6">
          <button
            type="submit"
            className="btn  w-full bg-linear-to-r from-indigo-500 to-blue-500 text-white border-none hover:from-indigo-600 hover:to-blue-600 transition-all duration-200"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
