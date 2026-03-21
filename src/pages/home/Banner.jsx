/* eslint-disable no-unused-vars */
import { easeInOut, motion } from "motion/react";
/* eslint-enable no-unused-vars */
import img1 from "../../assets/job1.jpg";
import img2 from "../../assets/job2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            src={img1}
            animate={{ y: [50, 80, 50] }}
            transition={{ duration: 8, ease: easeInOut, repeat: Infinity }}
            className="w-72 h-62   shadow-2xl rounded-t-[40px] rounded-br-[40px]  border-blue-500  border-l-8 border-b-8"
          ></motion.img>

          <motion.img
            src={img2}
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 6, ease: easeInOut, repeat: Infinity }}
            className="max-w-2xs shadow-2xl  rounded-t-[40px] rounded-br-[40px]  border-l-8 border-b-8  border-blue-500"
          ></motion.img>

          <div>
            <motion.h2
              className="text-5xl font-bold"
              animate={{
                rotate: 360,
                x: 200,
                y: -100,
                transition: { duration: 10, ease: easeInOut },
              }}
            >
              Latest{""}
              <motion.span
                animate={{
                  color: ["#ff5733", "#33ff33", "#8a33ff"],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: easeInOut,
                  },
                }}
              >
                {""} job for
              </motion.span>
              {""} you!
            </motion.h2>

            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
