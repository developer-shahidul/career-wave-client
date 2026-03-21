import { ChevronLeft, ChevronRight } from "lucide-react";
import categories from "../../data/categories.json";
import { useRef, useState } from "react";
const JobsCategoriesCarousel = () => {
  const scrollRef = useRef();

  const [isDraging, setIsDraging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDraging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDraging) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUpOrLeave = () => {
    setIsDraging(false);
  };

  const scrollLefts = () => {
    scrollRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };
  return (
    <div>
      <div>
        <div className="text-center mt-20">
          <h2 className="mb-2.5 text-4xl font-bold">Browse by category</h2>
          <p className="text-lg font-semibold text-black/60">
            Find the job that’s perfect for you. about 800+ new jobs everyday
          </p>
        </div>
        <div className="flex justify-between items-center mt-6 pb-18">
          <button
            onClick={scrollLefts}
            className="p-2 h-10.5 w-10.5 rounded-full text-gray-400 hover:text-blue-500 bg-blue-100"
          >
            <ChevronLeft />
          </button>
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex  gap-4  overflow-x-hidden py-4"
          >
            {categories.map((item, index) => (
              <div key={index} className="shrink-0  ">
                <div
                  className="flex gap-3 justify-center items-center border border-gray-300 hover:shadow-lg
              hover:-translate-y-1 transition-transform duration-500 px-5 py-4.5 rounded-2xl "
                >
                  <div className="h-10.5 w-10.5">
                    <img
                      className="h-full w-full object-cover"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold hover:text-[#3c65f5]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] font-semibold text-black/60 hover:text-[#3c65f5]">
                      {item.jobs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="p-2 h-10.5 w-10.5 rounded-full text-gray-400 hover:text-blue-500 bg-blue-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsCategoriesCarousel;
