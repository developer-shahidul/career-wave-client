import { Suspense } from "react";
import Banner from "./Banner";
import Jobs from "./Jobs";
import JobsCategoriesCarousel from "./JobsCategoriesCarousel";

const Home = () => {
  const jobsPromise = fetch(
    "https://career-wave-server-sigma.vercel.app/job",
  ).then((res) => res.json());
  return (
    <div className="mt-18">
      <Banner></Banner>
      <JobsCategoriesCarousel></JobsCategoriesCarousel>
      <Suspense
        fallback={
          <div className="py-20  text-center">
            <div className="inline-block animate-spin h-12 w-12 rounded-full border-t-4 border-red-600 border-solid"></div>
            <p className="mt-4 text-xl text-gray-600">Loading Hot Jobs...</p>
          </div>
        }
      >
        <Jobs jobsPromise={jobsPromise}></Jobs>
      </Suspense>
    </div>
  );
};

export default Home;
