import { createBrowserRouter } from "react-router";
import Layout from "../../layouts/Layout";
import Home from "../home/Home";
import Register from "../Authentication/Register";
import JobDetails from "../JobDetails/JobDetails";
import JobApply from "../jobApply/JobApply";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../Addjob/AddJob";
import MyApplications from "../myApplications/MyApplications";
import JobApplications from "../jobApplications/JobApplications";
import ViewApplication from "../viewApplication/ViewApplication";
import Login from "../Authentication/Login";

const Routers = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/job/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`https://career-wave-server-sigma.vercel.app/job/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://career-wave-server-sigma.vercel.app/job/${params.id}`),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobApplications",
        element: (
          <PrivateRoute>
            <JobApplications></JobApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplication/:jobId",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://career-wave-server-sigma.vercel.app/applications/${params.jobId}`,
          ),
      },
      {
        path: "/resister",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
export default Routers;
