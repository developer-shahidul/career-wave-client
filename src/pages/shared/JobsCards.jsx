import { BriefcaseBusiness, Clock8, MapPin } from "lucide-react";
import { Link } from "react-router";

const JobsCards = ({ jobs }) => {
  const {
    _id,
    title,
    location,
    jobType,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
    status,
  } = jobs;
  return (
    <div>
      <div>
        <div className="card group  h-full flex flex-col  shadow-sm hover:-translate-y-1 transition-transform duration-200 bg-[#3c65f507] hover:bg-white">
          <div className="flex gap-2 items-center px-5 pt-7 pb-5">
            <div>
              <img className="h-13 w-13" src={company_logo} alt="logo" />
            </div>
            <div>
              <h4 className="text-[18px] font-bold hover:text-[#3c65f5]">
                {company}
              </h4>
              <div className="flex text-[12px] text-[#a0abb8] font-semibold">
                <span>
                  <MapPin />
                </span>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <div className="card-body ">
            <div>
              <div>
                <h2 className="card-title hover:text-[#3c65f5]">
                  {title} <span className="badge badge-secondary">NEW</span>
                </h2>
              </div>
              <div className="flex gap-2 text-[12px] text-[#a0abb8]">
                <div className="flex gap-1 items-center">
                  <BriefcaseBusiness className="h-3 w-3" />
                  <span>{jobType}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Clock8 className="h-3 w-3" />
                  <span>{status}</span>
                </div>
              </div>
              <div className="text-[12px] text-[#a0abb8]">
                <h5>
                  Salary: {salaryRange.min}-{salaryRange.max}
                  <span> {salaryRange.currency}</span>
                </h5>
              </div>
            </div>
            <p className="font-medium text-sm text-[#4f5e64] mt-4">
              {description}
            </p>
            <div className="card-actions justify-end mt-7 mb-6 px-1.75 py-2.5 ">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="badge badge-outline bg-[#eff3fc] border-none hover:text-[#3c65f5]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="text-right ">
              <Link to={`/job/${_id}`}>
                <button className="btn btn-outline btn-success group-hover:bg-[#3c65f5] group-hover:text-white">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
