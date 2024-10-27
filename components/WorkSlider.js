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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import Image from "next/image";

// Ajoutez une prop `pageTransition` pour déterminer la transition de page depuis le composant parent
const WorkSlider = ({ pageTransition }) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => {
              // Masquez uniquement pendant la transition de page, pas lors du swipe
              const isHidden =
                pageTransition && slideIndex === 1 && imageIndex >= 0;

              return (
                <div
                  key={imageIndex}
                  className={`${isHidden ? "opacity-0" : ""} relative rounded-lg overflow-hidden flex items-center justify-center group`}
                >
                  {image.title === "ACEF de Québec" ? (
                    <Link href="/work/acef">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt={image.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
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
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
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
                  )}
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;


