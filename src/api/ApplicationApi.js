export const applicationCreateByPromise = (email) =>
  fetch(
    `https://career-wave-server-sigma.vercel.app/applications/applicant?email=${email}`,
    {
      credentials: "include",
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error("My Applications fetch error:", error);
      return [];
    });
