// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ACEF de Québec",
          technology: "| Asp.Net",
          path: "/Thumbnail ACEF.png",
        },
        {
          title: "Space Game",
          technology: "| Unity",
          path: "/Thumbnail SPACEGAME.png",
        },
        {
          title: "Bulky Book",
          technology: "| Asp.Net",
          path: "/Thumbnail BULKY.png",
        },
        {
          title: "Modern Recruit",
          technology: "| Asp.Net",
          path: "/Thumbnail MODERNRECRUIT.png",
        },
      ],
    },
    {
      images: [
        {
          title: "ASC",
          technology: "| Ml.Net + React",
          path: "/Thumbnail AnimalSpeciesClassifer.png",
        },
        {
          title: "My Portfolio",
          technology: "| React + Next.js",
          path: "/Thumbnail mydeveloperportfolio.png",
        },
        {
          title: "IN DEVELOPMENT",
          path: "/IN DEVELOPMENT.png",
        },
        {
          title: "IN DEVELOPMENT",
          path: "/IN DEVELOPMENT.png",
        },
      ],
    },
  ],
};

// import Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";

// icons
import { BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination } from "swiper";

// next image
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WorkSlider = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsVisible(false); // Cache le slider avant de changer de page
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Affiche le slider après une courte pause pour la transition
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [router.pathname]);

  return (
    <div className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  const links = {
                    "ACEF de Québec": "/work/acef",
                    "Space Game": "/work/spacegame",
                    "Bulky Book": "/work/bulky",
                    "Modern Recruit": "/work/modernrecruit",
                    "ASC": "/work/animalspeciesclassifier",
                    "My Portfolio": "/work/mydeveloperportfolio",
                  };

                  return (
                    <div key={index}>
                      {links[image.title] ? (
                        <Link href={links[image.title]} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                          <div className="flex items-center justify-center relative overflow-hidden group">
                            <Image
                              src={image.path}
                              width={500}
                              height={300}
                              alt={image.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                              <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                <div className="delay-100">{image.title}</div>
                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                  {image.technology}
                                </div>
                                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                  <BsArrowRight />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                          <div className="flex items-center justify-center relative overflow-hidden group">
                            <Image
                              src={image.path}
                              width={500}
                              height={300}
                              alt={image.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                              <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                <div className="delay-100">{image.title}</div>
                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                  {image.technology}
                                </div>
                                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                  <BsArrowRight />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
