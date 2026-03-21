import {
  Award,
  BriefcaseBusiness,
  CircleDollarSign,
  Clock,
  Clock8,
  Factory,
  MapPinned,
  PersonStanding,
  Toolbox,
  Watch,
} from "lucide-react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobsData = useLoaderData();
  const {
    _id,
    jobType,
    status,
    category,
    location,
    responsibilities,
    company,
    salaryRange,
    applicationDeadline,
  } = jobsData;
  return (
    <div className="mt-25 ">
      <div className="lg:flex gap-6 md:flex-row justify-between items-center mb-10">
        <div>
          <div className="card-title hover:text-[#3c65f5] text-3xl font-bold flex-wrap">
            {responsibilities.map((item, index) => (
              <h2 key={index}>{item} ,</h2>
            ))}
          </div>
          <div className="flex gap-2 text-[12px] text-[#a0abb8] ">
            <div className="flex gap-1 items-center">
              <BriefcaseBusiness className="h-3 w-3" />
              <span>{jobType}</span>
            </div>
            <div className="flex gap-1 items-center">
              <Clock8 className="h-3 w-3" />
              <span>{status}</span>
            </div>
          </div>
        </div>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-outline btn-success whitespace-nowrap">
            Apply Now
          </button>
        </Link>
      </div>
      <div className="divider"></div>

      <div className="border border-gray-300 mt-10 max-w-4xl mx-auto">
        <div className="divider px-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-10 py-2">
          <div className="flex justify-between ">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <Factory className="h-4 w-4" />
              <h5 className="font-semibold">Industry</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>{company}</h4>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <PersonStanding className="h-4 w-4" />
              <h5 className="font-semibold">Job level</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>{category}</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-2">
          <div className="flex justify-between ">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <CircleDollarSign className="h-4 w-4" />
              <h5 className="font-semibold">Salary</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>
                {salaryRange.min}$ - {salaryRange.max}${" "}
              </h4>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <Award className="h-4 w-4" />
              <h5 className="font-semibold">Experience</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>1 - 2 years</h4>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2   gap-6 px-10 py-2">
          <div className="flex justify-between ">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <Toolbox className="h-4 w-4" />
              <h5 className="font-semibold">Job type</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>{jobType}</h4>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <Watch className="h-4 w-4" />
              <h5 className="font-semibold">Deadline</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>{applicationDeadline}</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-6 px-10 py-2">
          <div className="flex justify-between ">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <Clock className="h-4 w-4" />
              <h5 className="font-semibold">Updated</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>12/01/2026</h4>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#a0abb8] flex gap-2 items-center">
              <MapPinned className="h-4 w-4" />
              <h5 className="font-semibold">Location</h5>
            </div>
            <div className="font-semibold text-base text-[#05264e]">
              <h4>{location}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
