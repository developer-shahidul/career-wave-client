export const jobApplicationsByPromise = (email, accessToken) =>
  fetch(
    `https://career-wave-server-sigma.vercel.app/job/applications?email=${email}`,
    {
      credentials: "include",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error("My jobs fetch error:", error);
      return [];
    });
