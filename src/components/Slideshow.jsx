"use client";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import HeroCardSection from "./HeroCardSection";
const properties = {
  prevArrow: <GrLinkPrevious className="m-2" />,
  nextArrow: <GrLinkNext className="m-2" />,
};

const Example = () => {
  return (
    <div className="relative">
      <Slide {...properties}>
        <div className="each-slide-effect">
          <div className="flex flex-col md:flex-row bg-alte items-center justify-center">
            <div className="m-4 md:m-8">
              <Image
                src="/assets/cake1.png"
                width={400}
                height={400}
                className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
                alt="Picture of the author"
              />
            </div>
            <div className="text-center text-pink p-4 md:p-8">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-20 md:mt-12 heading">
                Welcome to the Pastelhub
              </h1>
              <p className="text-sm md:text-md lg:text-xl mb-4 text-gray-400">
                Indulge in our delicious cakes and desserts
              </p>
              <a
                href="#"
                className="bg-pink text-white font-bold py-2 px-4 rounded-full inline-block hover:bg-gray-300 transition duration-300"
              >
                Order Now
              </a>
            </div>
            <div className="m-4 md:m-8">
              <Image
                src="/assets/cupcake1.png"
                width={300}
                height={300}
                className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </Slide>
      <div className="relative -mt-12 md:-mt-24 mx-4 md:mx-24">
        <HeroCardSection />
      </div>
    </div>
  );
};

export default Example;
