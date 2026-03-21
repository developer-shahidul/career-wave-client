import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyApplicationList from "./MyApplicationList";
// import { applicationCreateByPromise } from "../../api/ApplicationApi";
import UseApplicationApi from "../../api/UseApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  // console.log(user);
  const applicationCreateByPromise = UseApplicationApi();

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
        <MyApplicationList
          applicationCreateByPromise={applicationCreateByPromise(user?.email)}
        ></MyApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
